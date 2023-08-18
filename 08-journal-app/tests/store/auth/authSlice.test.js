import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from '../../../src/store/auth/authSlice';
import {
  authenticatedState,
  demoUser,
  initialState,
} from '../../fixfures/authFixtures';

describe('Pruebas en el authSlice', () => {
  test('debe de regresar el estado inicial y debe llamarse "auth', () => {
    // console.log(authSlice);
    expect(authSlice.name).toBe('auth');
    const state = authSlice.reducer(initialState, {});
    // console.log(state);
    expect(state).toEqual(initialState);
  });

  test('debe de realizar la autentication', () => {
    // cuando llama el login loque me devuelve es la accion
    // que le enviare a mi reducer
    // console.log(login(demoUser));

    //si envio un estado vacio {} el estado es checking
    // const state = authSlice.reducer(initialState, {});
    // console.log(state);

    //en el segundo parametro envio el action que me devuelve el longin(demoUser)
    //RECORDAR EL OBJETIVO DEL REDUCER  : crear un nuevo stado en el store
    const state = authSlice.reducer(initialState, login(demoUser));

    // console.log(state);
    expect(state).toEqual({
      status: 'authenticated', //'checking','not-authenticated','authenticated'
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test('debe de realizar el logout sin argumentos', () => {
    const state = authSlice.reducer(authenticatedState, logout());
    //asi quda el estado
    // console.log(state);

    expect(state).toEqual({
      status: 'not-authenticated', //'checking','not-authenticated','authenticated'
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });
  test('debe de realizar el logout  y mostrar un mensaje de error', () => {
    const errorMessage = 'Credenciales no son correctas';
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage })
    );
    //asi quda el estado
    console.log(state);

    expect(state).toEqual({
      status: 'not-authenticated', //'checking','not-authenticated','authenticated'
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage,
    });
  });

  test('debe de cambiar el estado a checking', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    //asi quda el estado
    console.log(state);

    expect(state.status).toBe('checking');
  });
});
