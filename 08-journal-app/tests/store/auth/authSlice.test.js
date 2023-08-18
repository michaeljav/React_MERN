import { authSlice } from '../../../src/store/auth/authSlice';
import { initialState } from '../../fixfures/authFixtures';

describe('Pruebas en el authSlice', () => {
  test('debe de regresar el estado inicial y debe llamarse "auth', () => {
    // console.log(authSlice);
    expect(authSlice.name).toBe('auth');
    const state = authSlice.reducer(initialState, {});
    // console.log(state);
    expect(state).toEqual(initialState);
  });
});
