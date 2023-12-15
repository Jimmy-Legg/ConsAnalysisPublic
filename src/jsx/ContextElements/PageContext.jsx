import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const usePageContext = () => {
    return useContext(PageContext);
};

export const PageProvider = ({ children }) => {

    const [selectedRequest, setSelectedRequest] = useState(null);
    const [isAnimationCanceled, setAnimationCanceled] = useState(true);

    const contextValue = {
        selectedRequest,
        setSelectedRequest,
        isAnimationCanceled,
        setAnimationCanceled
    };

    return (
        <PageContext.Provider value={contextValue}>
            {children}
        </PageContext.Provider>
    );
};

export default usePageContext;

