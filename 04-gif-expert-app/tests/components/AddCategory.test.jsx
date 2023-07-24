import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    //sugete de prueba
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Saitama' } });
    expect(input.value).toBe('Saitama');
    // screen.debug();
  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //cambiar el valor de la caja de texto
    fireEvent.input(input, { target: { value: 'Saitama' } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');

    //evaluar que la funcion haya sido llamada
    expect(onNewCategory).toHaveBeenCalled();
    //llamada una vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    //Haya sido llamada con el valor de nuestro input value
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('No debe de llamar el onNewCategory si el input esta vacio ', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);
    // screen.debug();

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    //expect(onNewCategory).not.toHaveBeenCalled();
  });
});
