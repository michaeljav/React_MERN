import { Navbar } from '../../ui';
import { Navigate, Route, Routes } from 'react-router-dom';
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
          {/* <Route path='hero' element={<HeroPage />} /> */}

          {/* solo se mostraria  heropage especificamente pongo la siguiente ruta pero manualmente no es conveniente. */}
          {/* <Route path='hero/marvel-captain' element={<HeroPage />} /> */}
          <Route path='hero/:id' element={<HeroPage />} />

          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  );
};

// export default HeroesRoutes;
