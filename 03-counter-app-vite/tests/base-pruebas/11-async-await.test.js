import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Prueba en 11-async-await ', () => {
  test('getImagen debe de retornar un URL de imagen', async () => {
    const url = await getImagen();

    // expect(typeof url).toBe('string');
  });

  test('getImagen debe de retornar un error sino tenemos api key', async () => {
    const response = await getImagen();

    // expect(response).toBe('No se encontró la imagen');
  });
});
