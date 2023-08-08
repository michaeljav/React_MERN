import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalApp } from '../JournalApp';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route />
      {/* JournalApp */}
      <Route path='/*' element={<JournalRoutes />} />

      <Route />
    </Routes>
  );
};
