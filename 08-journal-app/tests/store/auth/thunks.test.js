// import { singInWithGoogle } from '../../../src/firebase/providers';
import {
  loginWithEmailPassword,
  logoutFirebase,
  singInWithGoogle,
} from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth';
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
  startLogout,
} from '../../../src/store/auth/thunks';
import { clearNotesLogout } from '../../../src/store/journal';
import { demoUser } from '../../fixfures/authFixtures';

jest.mock('../../../src/firebase/providers');

describe('Pruebas en AuthThuks', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe de invocar el checkingCredentials ', async () => {
    // checkingAuthentication();
    // const t = checkingCredentials();
    // console.log(t);

    //el primero es la ejecucion de la funcion  y  el segundo es el retorno de la funcion
    await checkingAuthentication()(dispatch);
    // expect(dispatch).toHaveBeenCalledWith({
    //   payload: undefined,
    //   type: 'auth/checkingCredentials',
    // });
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test('startGoogleSignIn debe de llamar checkingCredentials y login - Exito', async () => {
    const loginData = { ok: true, ...demoUser };
    //mock del procedimiento que firebase
    await singInWithGoogle.mockResolvedValue(loginData);

    //thunk --> primer funcion sincrona y luego mando el dispatch
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('startGoogleSignIn debe de llamar checkingCredentials y logout - Error', async () => {
    const loginData = { ok: false, errorMessage: 'Un error en google' };
    //mock del procedimiento que firebase
    await singInWithGoogle.mockResolvedValue(loginData);

    //thunk --> primer funcion sincrona y luego mando el dispatch
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test('startLoginWithEmailPassword debe de llamar checkingCredentials y login - Exito', async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: '123456' };

    await loginWithEmailPassword.mockResolvedValue(loginData);

    await startLoginWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('startLogout debe de llamar logoutFirebase,clearNotes y logout', async () => {
    await startLogout()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
