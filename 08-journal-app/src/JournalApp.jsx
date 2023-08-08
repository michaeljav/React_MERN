import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';

export const JournalApp = () => {
  return (
    <AppTheme>
      {/* <h1>Hola Mundo Journal App</h1> */}
      <AppRouter />
    </AppTheme>
  );
};
