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

jest.mock('../../../src/store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
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
});
