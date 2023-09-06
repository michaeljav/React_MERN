import {
  authSlice,
  clearErrorMessage,
  onLogin,
  onLogout,
} from '../../../src/store/auth/authSlice';
import { authenticatedState, initialState } from '../../fixtures/authState';
import { testUserCredentials } from '../../fixtures/testUser';

describe('Pruebas en authSlice', () => {
  test('debe de regresar el estado inicial', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('debe de realizar un login', () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));
    // console.log(state);
    expect(state).toEqual({
      status: 'authenticated',
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });

  test('debe de realizar un logout', () => {
    const state = authSlice.reducer(authenticatedState, onLogout());
    // console.log(state);
    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: undefined,
    });
  });

  test('debe de realizar un logout con error', () => {
    const errorMessage = 'Credencials not valid';
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    // console.log(state);
    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: errorMessage,
    });
  });

  test('debe limpiar el mensaje de error', () => {
    const errorMessage = 'Credencials not valid';
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    const newstate = authSlice.reducer(state, clearErrorMessage());
    // console.log(state);
    expect(newstate.errorMessage).toBe(undefined);
  });
});
