import React from "react";

import useTopbarContext from "../../ContextElements/TopBarContext.jsx";
import usePageContext from "../../ContextElements/PageContext.jsx";

const RequestClosedRenderer = (requestId) => {

  const { currentPageData } = useTopbarContext();
  const { selectedRequest, setSelectedRequest, setAnimationCanceled } = usePageContext();

  const open = (requestId) => {
    setAnimationCanceled(false);
    setSelectedRequest(requestId);
  };

  const close = () => {
    setSelectedRequest(null);
  };

  const renderRequest = (requestId, title, icon, mainRequestTitle, averageValue, unit) => {
    const isVisible = !selectedRequest;

    return (
      <span className="request" id={requestId} onClick={isVisible ? () => (selectedRequest ? close() : open(requestId)) : null}>
        <h2>{title}</h2>
        <div className="iconContainer">
          <svg className="icon">
            <use href={`#${icon}`} width="60" height="60"></use>
          </svg>
        </div>
        <h3>{mainRequestTitle}</h3>
        <div className="value">
          <h1 className="number-part">{averageValue}</h1>
          <h1 className="unit-part">{unit}</h1>
        </div>
      </span>
    );
  };

  switch(requestId.requestId) {
    case "request1" :
      return renderRequest("request1", "Répartition matière", "iconBee", "Value title :", currentPageData.request1.wasteMassAverage || "N/A", "%");
    case "request2" :
      return renderRequest("request2", "Carrotes", "iconBee", "Masse moyenne :", currentPageData.request2.wasteMassAverage || "N/A", "g");
    case "request3" :
      return renderRequest("request3", "Répartition MM", "iconBee", "Masse moyenne :", currentPageData.request3.mmMassAverage || "N/A", "g");
    case "request4" :
      return renderRequest("request4", "Cycles", "iconBee", "Temps de cycle moyen :", currentPageData.request4.cycleTimeAverage || "N/A", "s");
    default :
      console.log("error, this request is not allowed");
      return null;
  }
}

export default RequestClosedRenderer;