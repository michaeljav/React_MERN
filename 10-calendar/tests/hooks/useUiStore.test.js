import { renderHook } from '@testing-library/react';
import { useUiStore } from '../../src/hooks';
import { Provider } from 'react-redux';
import { store, uiSlice } from '../../src/store';
import { configureStore } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer,
    },
    preloadedState: {
      ui: { ...initialState },
    },
  });
};

describe('Pruebas en useUiStore', () => {
  test('debe de regresar los valores por defecto', () => {
    const mockStore = getMockStore({ isDateModalOpen: false });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });
    // console.log(result);
    expect(result.current).toEqual({
      isDateModalOpen: false,
      openDateModal: expect.any(Function),
      closeDateModal: expect.any(Function),
      toggleDateModal: expect.any(Function),
    });
  });

  test('openDateModal debe de colocar tru en el isDateModalOpen', () => {
    const mockStore = getMockStore({ isDateModalOpen: false });
    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });
    //este valor se mantiene en false porque se codej por valor y no por refferencia
    // const { isDateModalOpen, openDateModal } = result.current;
    const { openDateModal } = result.current;

    act(() => {
      openDateModal();
    });

    //este valor se mantiene en false porque se codej por valor y no por refferencia
    // console.log({ result: result.current, isDateModalOpen });
    expect(result.current.isDateModalOpen).toBeTruthy();
  });

  test('closeDateModal debe de colocar false en  isDateModeOpen', () => {
    const mockStore = getMockStore({ isDateModalOpen: false });
    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });
    //este valor se mantiene en false porque se codej por valor y no por refferencia
    // const { isDateModalOpen, openDateModal } = result.current;
    const { openDateModal } = result.current;

    act(() => {
      openDateModal();
    });

    expect(result.current.isDateModalOpen).toBeTruthy();
  });

  test('toggleDateModal debe de cambiar el estado respectivamente', () => {
    const mockStore = getMockStore({ isDateModalOpen: true });
    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });
    //este valor se mantiene en false porque se codej por valor y no por refferencia
    // const { isDateModalOpen, openDateModal } = result.current;

    // const { toggleDateModal } = result.current;

    act(() => {
      result.current.toggleDateModal();
    });

    expect(result.current.isDateModalOpen).toBeFalsy();

    act(() => {
      result.current.toggleDateModal();
    });

    expect(result.current.isDateModalOpen).toBeTruthy();
  });
});
