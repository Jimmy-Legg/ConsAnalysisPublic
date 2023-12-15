import React, { createContext, useContext, useState } from 'react';

const TopbarContext = createContext();

export const useTopbarContext = () => {
    return useContext(TopbarContext);
};

export const TopbarProvider = ({ children }) => {
    const initialPage = "Page1";
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [newPageName, setNewPageName] = useState("");
    const [selectedPage, setSelectedPage] = useState(initialPage);
    const [pagesState, setPages] = useState([initialPage]);
    const [confirmedPages, setConfirmedPages] = useState([]);
    const [pagesData, setPagesData] = useState({});
    const [currentPageData, setCurrentPageData] = useState({request1: {}, request2: {}, request3: {}, request4: {}});


    const contextValue = {
        selectedPage,
        setSelectedPage,
        newPageName,
        setNewPageName,
        pagesState,
        setPages,
        currentPage,
        setCurrentPage,
        confirmedPages,
        setConfirmedPages,
        pagesData,
        setPagesData,
        currentPageData,
        setCurrentPageData,
    };

    return (
        <TopbarContext.Provider value={contextValue}>
            {children}
        </TopbarContext.Provider>
    );
};

export default useTopbarContext;
