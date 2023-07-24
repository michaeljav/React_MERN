import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//First step
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GrifGrid/>', () => {
  const category = 'One Punch';
  test('debe de mostrar el loading inicialmente', () => {
    //este objecto simulara lo que retornara la funcion del mock
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    //subjeto de prueba
    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
