import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('pruebas en 07-deses-arr', () => {
  test('debe de retornar un string  y un numero', () => {
    const [letter, numbers] = retornaArreglo();
    // expect(letter).toBe('ABC');
    //espera cualquier tipo de estring
    expect(expect.any(String)).toEqual(letter);
    // correct
    expect(123).toBe(numbers);
    //incorrect
    // expect(numbers).toBe('123');
  });
});
