import { render, screen } from '@testing-library/react';
import { useAuthStore } from '../../src/hooks';
import { AppRouter } from '../../src/router/AppRouter';
import ReactModal from 'react-modal';

jest.mock('../../src/hooks/useAuthStore');

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
});
