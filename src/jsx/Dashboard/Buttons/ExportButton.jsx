import React from "react";

export const ExportButton = ({ onConfirmation }) => {
  return (
    <div className="exportButton" onClick={onConfirmation}>
      <h2 className="title">Exporter</h2>
    </div>
  );
};

export default ExportButton;
