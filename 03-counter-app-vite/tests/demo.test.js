/* eslint-disable no-undef */
describe('Pruebas en  <DemoComponent />', () => {
  test('This prueba should not fail', () => {
    //Arrange or Inicializacion
    const message1 = 'Hello world!';
    //ACT
    const message2 = message1.trim();

    // Assert (afirmacion)
    expect(message1).toBe(message2);
  });
});
