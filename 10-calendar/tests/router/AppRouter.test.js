import { render, screen } from '@testing-library/react';
import { useAuthStore } from '../../src/hooks';
import { AppRouter } from '../../src/router/AppRouter';
import ReactModal from 'react-modal';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../src/hooks/useAuthStore');

//mock de un componente
jest.mock('../../src/calendar', () => ({
  CalendarPage: () => <h1>CalendarPage</h1>,
}));

describe('Pruebas en <AppRouter/>', () => {
  const mockCheckAuthToken = jest.fn();
  beforeEach(() => jest.clearAllMocks()); //

  test('debe de mostrar la pantalla de carga y llamar checkAuthToken', () => {
    useAuthStore.mockReturnValue({
      status: 'checking',
      checkAuthToken: mockCheckAuthToken,
    });

    render(<AppRouter />);
    // screen.debug();
    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(mockCheckAuthToken).toHaveBeenCalled();
  });

  test('debe de mostrar el login en caso de no estar autenticado', () => {
    useAuthStore.mockReturnValue({
      status: 'not-authenticated',
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <MemoryRouter initialEntries={['/auth2/algo/otracosa']}>
        <AppRouter />
      </MemoryRouter>
    );
    screen.debug();
    expect(screen.getByText('Ingreso')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el calendario si estamos atenticados', () => {
    useAuthStore.mockReturnValue({
      status: 'authenticated',
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <MemoryRouter initialEntries={['/auth2/algo/otracosa']}>
        <AppRouter />
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getByText('CalendarPage')).toBeTruthy();
    // expect(container).toMatchSnapshot();
  });
});
