import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  test('debe de hacer match con el snapshot', () => {
    const title = 'Holam michael';
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el Título en h1', () => {
    const title = 'Hola michael';
    const { container, getByText } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector('h1');

    expect(h1.innerHTML).toBe(title);
    expect(h1.innerHTML).toContain(title);
  });
});
