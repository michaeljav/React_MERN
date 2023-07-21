import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    //sugete de prueba
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Saitama' } });
    expect(input.value).toBe('Saitama');
    screen.debug();
  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //cambiar el valor de la caja de texto
    fireEvent.input(input, { target: { value: 'Saitama' } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');
  });
});
