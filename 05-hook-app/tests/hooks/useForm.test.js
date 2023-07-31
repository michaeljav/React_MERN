import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Michael',
    email: 'michael@michael.com',
  };

  test('debe de regrasar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    // eslint-disable-next-line no-undef
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('debe de realizar el reset del formulario', () => {
    const newValue = 'Juan';

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
      onResetForm();
    });
    console.log(result);
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
