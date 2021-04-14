import React, { createContext } from "react";

export const Context = createContext({});

const users = [
  { name: "Olga", id: 1 },
  { name: "Oleg", id: 2 },
  { name: "Petro", id: 3 },
];
export const ContextContainer = ({ children }) => {
  return <Context.Provider value={{ users }}>{children}</Context.Provider>;
};
