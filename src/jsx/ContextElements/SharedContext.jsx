// SharedContext.jsx
import React, { createContext, useContext, useState } from 'react';

const SharedContext = createContext();

export const useSharedContext = () => {
  const context = useContext(SharedContext);
  if (!context) {
    throw new Error('useSharedContext must be used within a SharedProvider');
  }
  return context;
};

export const SharedProvider = ({ children, initialPage }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [newPageName, setNewPageName] = useState("");
  const [selectedPage, setSelectedPage] = useState(initialPage);
  const [pagesState, setPages] = useState([initialPage]);

  return (
    <SharedContext.Provider value={{ newPageName, setNewPageName, pagesState, setPages, setCurrentPage, selectedPage, setSelectedPage, initialPage }}>
      {children}
    </SharedContext.Provider>
  );
};
