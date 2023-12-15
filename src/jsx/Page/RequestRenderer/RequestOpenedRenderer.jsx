import React from "react";

import RequestOpenedContentRenderer from "./RequestOpenedContentRenderer.jsx"

import usePageContext from "../../ContextElements/PageContext.jsx";

const RequestClosedRenderer = (requestId) => {

  const { selectedRequest, setSelectedRequest } = usePageContext();

  const close = () => {
    setSelectedRequest(null);
  };

  const renderRequest = (requestId, title, icon) => {
    return (
      <div id={`${requestId}opened`} className={`requestOpened ${selectedRequest === requestId ? "showed" : "hided"}`}>
        <h1 className="backArrow" onClick={() => close(requestId)}>{"<-"}</h1>
        <h1 className="title">{title}</h1>
        <div className="iconContainer">
          <svg className="icon">
          <use href={`#${icon}`} width="60" height="60"></use>
          </svg>
        </div>
        <RequestOpenedContentRenderer requestId={`${requestId}`}/>
      </div>
    );
  };

  switch(requestId.requestId) {
    case "request1" :
      return renderRequest("request1", "Répartition matière", "iconBee");
    case "request2" :
      return renderRequest("request2", "Carrotes", "iconBee");
    case "request3" :
      return renderRequest("request3", "Répartition MM", "iconBee");
    case "request4" :
      return renderRequest("request4", "Temps", "iconBee");
    default :
      console.log("error, this request is not allowed");
      return null;
  }
}

export default RequestClosedRenderer;