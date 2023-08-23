// import { singInWithGoogle } from '../../../src/firebase/providers';
import { checkingCredentials } from '../../../src/store/auth';
import { checkingAuthentication } from '../../../src/store/auth/thunks';

jest.mock('../../../src/firebase/providers');
describe('Pruebas en AuthThuks', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe de invocar el checkingCredentials ', async () => {
    // checkingAuthentication();
    // const t = checkingCredentials();
    // console.log(t);

    //el primero es la ejecucion de la funcion  y  el segundo es el retorno de la funcion
    await checkingAuthentication()(dispatch);
    // expect(dispatch).toHaveBeenCalledWith({
    //   payload: undefined,
    //   type: 'auth/checkingCredentials',
    // });
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});
