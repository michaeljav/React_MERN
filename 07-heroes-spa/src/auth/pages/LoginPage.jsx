import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  // login('Michael Javier');
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Jose Javier');
    navigate(lastPath, { replace: true });
  };
  return (
    <div className='cointainer mt-5'>
      <h1>Login</h1>
      <hr />

      <button onClick={onLogin} className='btn btn-primary'>
        Login
      </button>
    </div>
  );
};

// export default LoginPage;
