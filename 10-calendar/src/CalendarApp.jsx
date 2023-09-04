import { BrowserRouter, HashRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { Provider } from 'react-redux';
import { store } from './store';

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      {/*METODO 1  esto es para cuando refresco y busco una ruta que  mi router no la soporta porque mi router comienza a funcionar desde el index ya que es una SPA SINGLE PAGE APPLICATION */}
      {/* <BrowserRouter> */}
      <HashRouter>
        <AppRouter />
      </HashRouter>
      {/* </BrowserRouter> */}
    </Provider>
  );
};
