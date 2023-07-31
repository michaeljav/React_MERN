import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

//para hacer el el mock o la simulation  del useFetch
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas e <MultipleCustomHooks />>', () => {
  // // //para que en todas las funcions  el useCounter returno uno
  const mockIncrement = jest.fn();

  //este es como si el useFech hook habría devuelto esto
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  // para asegurarme de limpar esa funciones que acabo de llamar en todas las pruebas
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el componenten por defecto', () => {
    //este es como si el useFech hook habría devuelto esto
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Loading'));
    expect(screen.getByText('BreakingBad Quotes'));
    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    console.log(nextButton.disabled);
    expect(nextButton.disabled).toBe(true);
    // screen.debug();
  });

  test('debe de mostrar un Quote', () => {
    //este es como si el useFech hook habría devuelto esto
    useFetch.mockReturnValue({
      data: [{ author: 'Michael', quote: 'Hola Michael mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    // screen.debug();
    expect(screen.getByText('Hola Michael mundo')).toBeTruthy();
    expect(screen.getByText('Michael')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe de llamar la funcion incrementar', () => {
    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
