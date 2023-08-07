// const { render } = require('@testing-library/react');
// const { MemoryRouter } = require('react-router-dom');

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

describe('Pruebas en <SearchPage/>', () => {
  test('debe de mostrarse correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
    screen.debug();
  });

  test('debe de mostrarse A batman y el input con el valor del queryString', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman');
    screen.debug();

    const img = screen.getByRole('img');
    expect(img.src).toContain('/asserts/heroes/dc-batman.jpg');

    const alert = screen.getByLabelText('alert-danger');
    expect(alert.style.display).toBe('none');
  });
});
