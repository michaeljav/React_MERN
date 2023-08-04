import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

// const initialState = {
//   logged: false,
// };

///inicializacion del reducer y context con el usuario almacenado.
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  // console.log('hola ', user);
  // console.log('hola !  ', !user);
  // console.log('hola !!  ', !!user);
  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(
    authReducer,
    /*initialState*/ {},
    init
  );

  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name: name,
    };
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login: login }}>
      {children}
    </AuthContext.Provider>
  );
};
