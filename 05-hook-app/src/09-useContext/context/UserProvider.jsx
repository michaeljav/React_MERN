import React from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'mundo' }}>
      {children}
    </UserContext.Provider>
  );
};
