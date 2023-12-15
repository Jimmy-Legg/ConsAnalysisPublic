import React, { useEffect, useState } from 'react';
import { Dashboard } from "./Dashboard/Dashboard.jsx";
import Page from "./Page/Page.jsx";
import Topbar from "./TopBar/Topbar.jsx";

import useTopbarContext from "./ContextElements/TopBarContext.jsx";
import { PageProvider } from "./ContextElements/PageContext.jsx";

export const App = () => {
  const [returnedData, setReturnedData] = useState([]);

  const fetchData = async () => {
    try {
      const newData = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(res => res.json());

      console.log(newData);
      setReturnedData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { selectedPage, confirmedPages } = useTopbarContext();


  return (
    <div className="main-page">
      {returnedData.map((data, index) => (
        <p key={index}>idPiece: {data.idPiece}</p>
      ))}
      <Dashboard />
      <Topbar />
      <PageProvider>
        <Page isPageEmpty={!confirmedPages.includes(selectedPage)} />
      </PageProvider>
    </div>
  );

};

export default App;
