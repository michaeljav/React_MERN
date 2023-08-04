import React, { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router-dom';

//para mostra solo rutas que puedo mostrar.
export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  //si no esta logeado  voy a mostrar los hijos
  return !logged ? children : <Navigate to='/marvel' />;
};
