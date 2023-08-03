import { Navbar } from '../../ui';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { DcPages } from '../pages/DcPages';
// import { MarvelPage } from '../pages/MarvelPage';
import { DcPages, HeroPage, MarvelPage, SearchPage } from '../../heroes';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPages />} />

          <Route path='search' element={<SearchPage />} />
          <Route path='hero' element={<HeroPage />} />

          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  );
};

// export default HeroesRoutes;
