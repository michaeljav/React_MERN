import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth/context/AuthContext';

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

  test('debe de navegar si esá autenticado', () => {});
});
