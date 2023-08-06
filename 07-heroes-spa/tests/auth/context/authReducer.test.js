import { authReducer } from '../../../src/auth/context/AuthReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en authReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const initial = { logged: false };
    const state = authReducer(initial, {});
    expect(state).toEqual(initial);
  });

  test('debe (login) llamar el login autenticar y establecer el user', () => {
    const initial = { logged: false };

    const action = {
      type: types.login,
      payload: {
        name: 'Juan',
        id: '123',
      },
    };
    const state = authReducer(initial, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test('debe de (logout) borrar el name del usuario y logged en false', () => {
    const state = {
      logged: true,
      user: {
        id: '123',
        name: 'Juan',
      },
    };

    const action = {
      type: types.logout,
    };
    const newState = authReducer(state, action);
    expect(newState).toEqual({
      logged: false,
    });
  });
});
