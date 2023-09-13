//create a context (data warehouse)
//provider
//consumer
import React, { useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("hello");
  return (
    <AppContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobalContext };
