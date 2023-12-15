import React, { useState } from "react";

import useTopbarContext from "../../ContextElements/TopBarContext.jsx";

const RequestOpenedContentRenderer = (requestId) => {

    const { currentPageData } = useTopbarContext();

    const [small1TimeInnerRequest, setSmall1TimeInnerRequest] = useState("openCloseTimeWindow");
    const [small2TimeInnerRequest, setSmall2TimeInnerRequest] = useState("coolDownTimeWindow");
    const [largeTimeInnerRequest, setLargeTimeInnerRequest] = useState("cycleTimeWindow");
    const [large1TimeInnerRequest, setLarge1TimeInnerRequest] = useState(null);
    const [large2TimeInnerRequest, setLarge2TimeInnerRequest] = useState(null);

    const switchTimeRequest = (targetId) => {

        setLarge1TimeInnerRequest(null);
        setLarge2TimeInnerRequest(null);

        if (targetId === small1TimeInnerRequest) {
          setSmall1TimeInnerRequest(largeTimeInnerRequest);
          setLarge1TimeInnerRequest(targetId);
          setLargeTimeInnerRequest(targetId);
        }
        else if (targetId === small2TimeInnerRequest) {
          setSmall2TimeInnerRequest(largeTimeInnerRequest);
          setLarge2TimeInnerRequest(targetId);
          setLargeTimeInnerRequest(targetId);
        }
      };

    switch (requestId.requestId) {

      case "request1":

        return (
          <div id="content">
          </div>
        );

      case "request2":

        return (
          <div id="content">
            <div id="wasteAmountWindow" className="dataWindow small"><h2>Nombre de pièces produisant des carrotes :</h2><h1>{currentPageData.request2.wasteAmountValue || "N/A"}</h1></div>
            <div id="recyclingPercentageWindow" className="dataWindow small"><h2>Taux de recyclage :</h2><h1>{currentPageData.request2.recyclingPercentageValue || "N/A"} %</h1></div>
            <div id="wasteMassWindow" className="dataWindow large"><h2 className="dataWindowTitle">Masse des carrotes</h2>
              <div className="range"><h2>Etendue :</h2><h1>{currentPageData.request2.wasteMassRange || "N/A"} g</h1></div>
              <div className="average"><h2>Moyenne :</h2><h1>{currentPageData.request2.wasteMassAverage || "N/A"} g</h1></div>
              <div className="median"><h2>Médiane :</h2><h1>{currentPageData.request2.wasteMassMedian || "N/A"} g</h1></div>
            </div>
          </div>
        );

      case "request3":

        return (
          <div id="content">
            <div id="mmAmountWindow" className="dataWindow small"><h2>Nombre de mélange maitre utilisé</h2><h1>{currentPageData.request3.mmAmount || "N/A"}</h1></div>
            <div id="mmPercentageWindow" className="dataWindow small"><h2>Pourcentage de mélange maitre</h2><h1>{currentPageData.request3.mmPercentage || "N/A"} %</h1></div>
            <div id="mmMassWindow" className="dataWindow large"><h2 className="dataWindowTitle">Masse des mélanges maitres</h2>
              <div className="range"><h2>Etendue :</h2><h1>{currentPageData.request3.mmMassRange || "N/A"} g</h1></div>
              <div className="average"><h2>Moyenne :</h2><h1>{currentPageData.request3.mmMassAverage || "N/A"} g</h1></div>
              <div className="median"><h2>Médiane :</h2><h1>{currentPageData.request3.mmMassMedian || "N/A"} g</h1></div>
            </div>
          </div>
        );

      case "request4":

        return (
          <div id="content">
            <div id="openCloseTimeWindow" className={`dataWindow ${small1TimeInnerRequest === "openCloseTimeWindow" ? "small small1" : ""} ${small2TimeInnerRequest === "openCloseTimeWindow" ? "small small2" : ""} ${largeTimeInnerRequest === "openCloseTimeWindow" ? "large" : ""} ${large1TimeInnerRequest === "openCloseTimeWindow" ? "large1" : ""} ${large2TimeInnerRequest === "openCloseTimeWindow" ? "large2" : ""}`} onClick={() => switchTimeRequest("openCloseTimeWindow")}>
              <h2 className="dataWindowTitle">Temps d'ouverture / fermeture :</h2>
              <div className="range"><h2>Etendue :</h2><h1>{currentPageData.request4.openCloseTimeRange || "N/A"} s</h1></div>
              <div className="average"><h2>Moyenne :</h2><h1>{currentPageData.request4.openCloseTimeAverage || "N/A"} s</h1></div>
              <div className="median"><h2>Médiane :</h2><h1>{currentPageData.request4.openCloseTimeMedian || "N/A"} s</h1></div>
            </div>
            <div id="coolDownTimeWindow" className={`dataWindow ${small1TimeInnerRequest === "coolDownTimeWindow" ? "small small1" : ""} ${small2TimeInnerRequest === "coolDownTimeWindow" ? "small small2" : ""} ${largeTimeInnerRequest === "coolDownTimeWindow" ? "large" : ""} ${large1TimeInnerRequest === "coolDownTimeWindow" ? "large1" : ""} ${large2TimeInnerRequest === "coolDownTimeWindow" ? "large2" : ""}`} onClick={() => switchTimeRequest("coolDownTimeWindow")}>
              <h2 className="dataWindowTitle">Temps de refroidissement :</h2>
              <div className="range"><h2>Etendue :</h2><h1>{currentPageData.request4.coolDownTimeRange || "N/A"} s</h1></div>
              <div className="average"><h2>Moyenne :</h2><h1>{currentPageData.request4.coolDownTimeRange || "N/A"} s</h1></div>
              <div className="median"><h2>Médiane :</h2><h1>{currentPageData.request4.coolDownTimeRange || "N/A"} s</h1></div>
            </div>
            <div id="cycleTimeWindow" className={`dataWindow ${small1TimeInnerRequest === "cycleTimeWindow" ? "small small1" : ""} ${small2TimeInnerRequest === "cycleTimeWindow" ? "small small2" : ""} ${largeTimeInnerRequest === "cycleTimeWindow" ? "large" : ""} ${large1TimeInnerRequest === "cycleTimeWindow" ? "large1" : ""} ${large2TimeInnerRequest === "cycleTimeWindow" ? "large2" : ""}`} onClick={() => switchTimeRequest("cycleTimeWindow")}>
              <h2 className="dataWindowTitle">Temps de cycle :</h2>
              <div className="range"><h2>Etendue :</h2><h1>{currentPageData.request4.coolDownTimeMedian || "N/A"} s</h1></div>
              <div className="average"><h2>Moyenne :</h2><h1>{currentPageData.request4.coolDownTimeMedian || "N/A"} s</h1></div>
              <div className="median"><h2>Médiane :</h2><h1>{currentPageData.request4.coolDownTimeMedian || "N/A"} s</h1></div>
            </div>
          </div>
        );

      default:
        console.log("error, this request is not allowed");
        return null;
    }
}

export default RequestOpenedContentRenderer;