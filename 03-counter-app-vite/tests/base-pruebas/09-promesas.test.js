import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
    const id = 1;
    const result = {
      id: 1,
      name: 'Batman',
      owner: 'DC',
    };
    getHeroeByIdAsync(id).then((hero) => {
      // console.log(hero);
      // expect(hero).toEqual(result);
      // expect(true).toBe(false);
      //to wait to finish
      done();
    });
  });

  test('getHeroeByIdAsync debe obtener un error si no existe', (done) => {
    const id = 100;
    const result = {
      id: 1,
      name: 'Batman',
      owner: 'DC',
    };
    getHeroeByIdAsync(id)
      // este no deberia de llamarse aqui por el objetivo de la prueba que es que venga vacio
      .then((hero) => {
        // expect(hero).toBeFalsy();
        done();
      })
      .catch((err) => {
        // console.log(err);
        // expect(err).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      });
  });
});
