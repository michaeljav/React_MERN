import { renderHook, screen } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
import { act } from 'react-dom/test-utils';

describe('Pruebas en el useCounter', () => {
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('debe de generar el counter debe generar el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('debe de incrementar el contador', () => {
    const { result } = renderHook(() => useCounter());

    const { counter, increment } = result.current;
    console.log(result);
    // screen.debug();
    act(() => {
      increment(2);
    });
    //No use  counter directamente porque se crea una nueva variable y no almacena
    //la actualizacion que se hace con el metodo increment
    //video 167 ...ejecutar fucnion customhook
    expect(result.current.counter).toBe(12);
  });

  test('debe de decrementar el contador', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement } = result.current;
    console.log(result);
    // screen.debug();
    act(() => {
      decrement();
    });
    expect(result.current.counter).toBe(9);
  });

  test('debe de realizar el reset', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, reset } = result.current;
    console.log(result);
    // screen.debug();
    // act(() => {
    //   increment();
    // });
    // expect(result.current.counter).toBe(11);
    act(() => {
      increment();
      reset();
    });
    expect(result.current.counter).toBe(10);
  });
});
