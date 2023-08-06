import React, { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

//para mostra solo rutas que puedo mostrar.
export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);
  // console.log('rerender');
  return logged ? children : <Navigate to='/login' />;
};
