import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currPage, setCurrPage] = useState(1);

  const setCurrPageHandler = () => {
    setCurrPage((pre) => !pre);
  };

  return (
    <UserContext.Provider value={{ currPage, setCurrPageHandler }}>
      {children}
    </UserContext.Provider>
  );
};

export const useSharedState = () => useContext(UserContext);