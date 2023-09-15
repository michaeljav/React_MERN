import { renderHook, waitFor } from '@testing-library/react';
import { authSlice } from '../../src/store';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { initialState, notAuthenticatedState } from '../fixtures/authState';
import { act } from 'react-dom/test-utils';
import { testUserCredentials } from '../fixtures/testUser';

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: {
      // ui: { ...initialState },
      auth: { ...initialState },
    },
  });
};

describe('Pruebas en useAuthStore ', () => {
  test('debe de resgresar los valores por defecto', () => {
    const mockStore = getMockStore({ ...initialState });

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    console.log(result.current);

    expect(result.current).toEqual({
      errorMessage: undefined,
      status: 'checking',
      user: {},
      checkAuthToken: expect.any(Function),
      startLogin: expect.any(Function),
      startLogout: expect.any(Function),
      startRegister: expect.any(Function),
    });
  });

  test('startLogin debe de realizar el login correctamente', async () => {
    localStorage.clear();
    const mockStore = getMockStore({ ...notAuthenticatedState });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      await result.current.startLogin(testUserCredentials);
    });

    // console.log(result.current);
    const { errorMessage, status, user } = result.current;
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: 'authenticated',
      user: { name: 'Test User', uid: '64f6532de53c5360bdefd950' },
    });

    //tocken que se graba al loging in
    //todo lo que se graba en el local storage termina siendo un string
    expect(localStorage.getItem('token')).toEqual(expect.any(String));
    expect(localStorage.getItem('token-init-date')).toEqual(expect.any(String));
  });

  test('startLogin debe de fallar la autentication', async () => {
    localStorage.clear();
    const mockStore = getMockStore({ ...notAuthenticatedState });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      await result.current.startLogin({
        email: 'foo@bar.com',
        password: '15464254',
      });
    });

    const { errorMessage, status, user } = await result.current;
    // console.log({ errorMessage, status, user });
    // console.log(localStorage.getItem('token'));
    expect(localStorage.getItem('token')).toBe(null);

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: 'credentials incorrect',
      status: 'not-authenticated',
      user: {},
    });

    //espera automaticamente 5 segundo
    await waitFor(() => expect(result.current.errorMessage).toBe(undefined));
  });
});
