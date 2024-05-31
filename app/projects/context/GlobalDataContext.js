import React, { createContext, useState } from "react";

export const GlobalDataContext = createContext();

export const GlobalDataProvider = ({ children }) => {
  const [projetos, setProjetos] = useState([]);

  return (
    <GlobalDataContext.Provider value={{ projetos, setProjetos }}>
      {children}
    </GlobalDataContext.Provider>
  );
};