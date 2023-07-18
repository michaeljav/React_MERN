import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  // test('debe de hacer match con el snapshot', () => {
  //   const title = 'Holam michael';
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test('debe de mostrar el Título en h1', () => {
    const title = 'Hola michael';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);

    //que exista
    // expect(getByTestId('test-title')).toBeTruthy();
    // //verificar contenido
    expect(getByTestId('test-title').innerHTML).toBe(title);
    // //que contenga el titutulo
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Hola michael';
    const subTitle = 'Soy un subtitulo';
    const { getByText, getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    //verificar que exista un subtitulo
    // expect(getByText(subTitle)).toBeTruthy();
    //si aparecen mas de uno
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
