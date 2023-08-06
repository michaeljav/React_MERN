import { render, screen } from '@testing-library/react';

import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en <PrivateRoute/>', () => {
  test('debe de mostrar el children si no esta autenticado', () => {
    //LLAMAR EL LOCAL STORATE
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: 'Juan Carlos',
        id: 'abc',
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta private</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText('Ruta private')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/search?q=batman'
    );
  });
});
