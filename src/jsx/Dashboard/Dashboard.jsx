import React from "react";

import SitesDropDownList from "./DropDown/Lists/SitesDropDownList.jsx";
import CDADropDownList from "./DropDown/Lists/CDADropDownList.jsx";
import GMDropDownList from "./DropDown/Lists/GMDropDownList.jsx";

import ExportButton from "./Buttons/ExportButton.jsx";
import ConfirmationButton from "./Buttons/ConfirmationButton.jsx";

export const Dashboard = () => {
  return (
    <div className="dashboard">

      <div className="title ofDashboard">Dashboard</div>

      <div className="title inListSite">Site</div>
      <SitesDropDownList/>

      <div className="title inListCDA">CDA</div>
      <CDADropDownList/>

      <div className="title inListGM">Groupes machines</div>
      <GMDropDownList/>

      <ConfirmationButton/>
      <ExportButton/>
    </div>
  )
};

export default Dashboard;
