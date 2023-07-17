import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Prueba en 11-async-await ', () => {
  test('getImagen debe de retornar un URL de imagen', async () => {
    const url = await getImagen();
    // console.log(url);
    // console.log('Michael ', typeof url);
    expect(typeof url).toBe('string');
  });

  test('getImagen debe de retornar un error sino tenemos api key', async () => {
    const response = await getImagen();
    // console.log(url);
    // console.log('Michael ', typeof url);
    expect(response).toBe('No se encontró la imagen');
  });
});
