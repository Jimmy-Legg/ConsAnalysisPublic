import React from "react";
import "../../css/style.css";

import usePageContext from "../ContextElements/PageContext.jsx";

import RequestClosedRenderer from "./RequestRenderer/RequestClosedRenderer.jsx";
import RequestOpenedRenderer from "./RequestRenderer/RequestOpenedRenderer.jsx";

const Page = ({ isPageEmpty }) => {

  const { selectedRequest, isAnimationCanceled } = usePageContext();

  return (
    <div className={`page ${isPageEmpty ? "isEmpty" : ""}`}>
      <div id="emptyPage"><h2>La page est vide, veuillez valider des valeurs ...</h2></div>
      <div id="requests" className={`requests ${isAnimationCanceled ? "canceled" : ""} ${selectedRequest === null ? "showed" : "hided"}`}>
        <RequestClosedRenderer requestId="request1"/>
        <RequestClosedRenderer requestId="request2"/>
        <RequestClosedRenderer requestId="request3"/>
        <RequestClosedRenderer requestId="request4"/>
      </div>
      <div id="requestsOpened" className="requestsOpened">
        <RequestOpenedRenderer requestId="request1"/>
        <RequestOpenedRenderer requestId="request2"/>
        <RequestOpenedRenderer requestId="request3"/>
        <RequestOpenedRenderer requestId="request4"/>
      </div>
    </div>
  );
};

export default Page;
