import calendarApi from '../../src/api/calendarApi';

describe('Pruebas en el CalendarApi', () => {
  test('debe de tener la configuracion por defecto', () => {
    // console.log(calendarApi);
    const urlAxios = calendarApi.defaults.baseURL;
    // console.log(calendarApi.defaults.baseURL);
    //variable de entorno
    const envVariable = process.env.VITE_API_URL;
    // console.log(process.env);

    expect(urlAxios).toBe(envVariable);
  });

  test('debe de tener el x-token en el header de todas las peticiones', async () => {
    const tokenGenerated = 'ASD5484SDF5-SD';
    localStorage.setItem('token', tokenGenerated);
    const res = await calendarApi.get('/auth');
    expect(res.config.headers['x-token']).toBe(tokenGenerated);
    // console.log(res);
  });
});
