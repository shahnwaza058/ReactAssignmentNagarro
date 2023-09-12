//create a context (data warehouse)
//provider
//consumer
import React, { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const noOfLikes = localStorage.getItem("Likes");
  return;
  <AppContext.Provider value={"value"}>{children}</AppContext.Provider>;
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobalContext };
