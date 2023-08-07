import { fireEvent, render, screen } from '@testing-library/react';

import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Navbar } from '../../../src/ui/components/Navbar';
import { AuthContext } from '../../../src/auth/context/AuthContext';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual(
    'react-router-dom'
  ) /**usa todo lo de la libreria pero solo sustitulle useNavigate */,
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas de <Navbar/>', () => {
  const constextValue = {
    logged: true,
    user: {
      name: 'Juan carlos',
    },
    logout: jest.fn() /**ese metodo viede desde el AuthProvider.jsx  padre */,
  };

  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar el nombre del usuario', () => {
    render(
      <AuthContext.Provider value={constextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText('Juan carlos')).toBeTruthy();
  });

  test('debe de llamar el logout y navigate cuando se hace click en el boton de logout', () => {
    render(
      <AuthContext.Provider value={constextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);

    //tubo que haberse llamado el logout en mi contextvalue
    expect(constextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
    // expect
  });
});
