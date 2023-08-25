const { render, screen, fireEvent } = require('@testing-library/react');
const { LoginPage } = require('../../../src/auth/pages/LoginPage');
const { Provider } = require('react-redux');
const { configureStore } = require('@reduxjs/toolkit');
const { authSlice } = require('../../../src/store/auth');
const { startGoogleSignIn } = require('../../../src/store/auth/thunks');
const { MemoryRouter } = require('react-router-dom');
const { notAuthenticatedState } = require('../../fixfures/authFixtures');

//obligatorio escribir mock
const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailPassword: ({ email, password }) => {
    return () => mockStartLoginWithEmailPassword({ email, password });
  },
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

describe('Pruebas en <LoginPage/>', () => {
  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar el componente correctamente', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    // screen.debug();

    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
  });

  test('boton de google debe de llamar el startGoogleSignIn ', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText('google-btn');
    // console.log(googleBtn);
    //se necesita que le boton este habilidato y por eso
    //envio el preloadedState arriba
    fireEvent.click(googleBtn);

    // console.log(store.getState());
    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });

  test('submit debe de llamar startLoginWithEmailPassword ', () => {
    const email = 'michaeljv@gmail.com';
    const password = '123456';

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole('textbox', { name: 'Email' });
    // console.log(emailField);
    fireEvent.change(emailField, { target: { name: 'email', value: email } });

    const passwordField = screen.getByTestId('password');
    fireEvent.change(passwordField, {
      target: { name: 'password', value: password },
    });

    const loginForm = screen.getByLabelText('submit-form');

    // screen.debug();
    fireEvent.submit(loginForm);

    expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
      email: email,
      password: password,
    });
  });
});
