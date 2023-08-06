import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRoute/>', () => {
  test('debe de mostrar el children si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText('Ruta publica')).toBeTruthy();
  });

  test('debe de navegar si esá autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Strider',
        id: 'ABC123',
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        {/* Memoryroute para poder usar el navegate */}
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            {/* Este es el primer route publica  y si esta autenticado va a la privada */}
            <Route
              path='login'
              element={
                <PublicRoute>
                  <h1>Ruta publica</h1>
                </PublicRoute>
              }
            />

            <Route path='marvel' element={<h1>Pagina marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText('Pagina marvel')).toBeTruthy();
  });
});
