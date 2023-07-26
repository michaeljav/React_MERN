import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { Navbar } from './Navbar';

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/login'>Login</Link> */}
      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        {/* Si no existe la ruta AUNQU SE QUEDA EN LA RUTA EN LA URL */}
        {/* <Route path='/*' element={<LoginPage />} /> */}

        {/* ESTA ME MUEVE A LA RUTA */}
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};
