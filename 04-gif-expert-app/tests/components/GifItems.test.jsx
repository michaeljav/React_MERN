import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('<Pruebas en <GifItem />', () => {
  const title = 'Saitama';
  const url = 'https://one.com/tat.jpg';
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con la url y el Alt indicado', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    //One opction
    expect(screen.getByRole('img').src).toBe(url);
    //second option
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(src);
    expect(alt).toBe(alt);
  });

  test('debe de mostrar el titulo del componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
