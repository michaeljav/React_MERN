import { renderHook } from '@testing-library/react';
import { authSlice } from '../../src/store';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { initialState } from '../fixtures/authState';

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
});
