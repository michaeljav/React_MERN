import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* si esta atenticado no mostrara el login */}

        {/* option 1  */}
        {/* <Route
          path='/login'
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        /> */}

        {/* option 2 */}
        <Route
          path='login/*'
          element={
            <PublicRoute>
              <Routes>
                <Route path='/*' element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />

        {/* <Route path='login' element={<LoginPage />} /> */}

        {/* para proteger esta ruta que debe de ser vista solo si  estoy loggiado */}
        <Route
          path='/*'
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path='/*' element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
