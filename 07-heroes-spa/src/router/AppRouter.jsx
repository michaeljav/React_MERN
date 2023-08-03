import { Navigate, Route, Routes } from 'react-router-dom';

// import LoginPage from '../auth/pages/LoginPage';
// import { LoginPage } from '../auth/pages/LoginPage';
import { LoginPage } from '../auth';
// import { Navbar } from '../ui';
// import HeroesRoutes from '../heroes/routes/HeroesRoutes';
// import { DcPages } from '../heroes/pages/DcPages';
// import { MarvelPage } from '../heroes/pages/MarvelPage';
// import HeroesRoutes from '../heroes/routes/HeroesRoutes';
// import HeroesRoutes from '../heroes/routes/HeroesRoutes';
import { HeroesRoutes } from '../heroes';

export const AppRouter = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
