import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    console.log('MICHAEL ', { email, password });
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post('/auth', { email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      console.log(error);
      dispatch(onLogout('credentials incorrect'));
      setTimeout(() => dispatch(clearErrorMessage()), 10);
    }
  };

  //start register
  const startRegister = async ({ email, password, name }) => {
    // console.log({ email, password });
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post('/auth/new', {
        email,
        password,
        name,
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      // console.log(error);
      dispatch(onLogout(error.response.data?.msg || '---'));
      setTimeout(() => dispatch(clearErrorMessage()), 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      return dispatch(onLogout());
    }

    try {
      const { data } = await calendarApi.get('auth/renew');
      console.log('MICHAEL RENEW ', { data });
      console.log('MICHAEL RENEW OBJECT', { name: data.name, uid: data.uid });
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //*Properties
    errorMessage,
    status,
    user,
    //*Methods
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
