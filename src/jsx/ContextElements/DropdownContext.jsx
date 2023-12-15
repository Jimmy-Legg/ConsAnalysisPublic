import React, { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();

export const useDropdownContext = () => {
  return useContext(DropdownContext);
};

export const DropdownProvider = ({ children }) => {
  const [site, setSite] = useState('Tous');
  const [cda, setCda] = useState('Tous');
  const [gm, setGm] = useState('Tous');
  

  const contextValue = {
    site,
    cda,
    gm,
    setSite,
    setCda,
    setGm,
  };
  return (
    <DropdownContext.Provider value={contextValue}>
      {children}
    </DropdownContext.Provider>
  );
};

export default useDropdownContext;
