// import { render, screen } from '@testing-library/react';
// import { AuthContext } from '../../src/auth';
// import { MemoryRouter } from 'react-router-dom';
// import { AppRouter } from '../../src/router/AppRouter';

import { render } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, createMemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter';

// import { MemoryRouter } from 'react-router-dom';
// import { AuthContext } from '../../src/auth';
// import { AppRouter } from '../../src/router/AppRouter';
// import { render } from '@testing-library/react';

describe('Pruebas en <AppRouter />', () => {
  test('debe de mostrar el login si no  esta autenticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Login').length).toBe(2);
  });
});
