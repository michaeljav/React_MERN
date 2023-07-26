import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded-3'>
      <Link className='navbar-brand ' to='/'>
        useContext
      </Link>
      {/* <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button> */}
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <NavLink
            to='/'
            className={({ isActive }) => {
              console.log(isActive);
              // return 'nav-link';
              return `nav-link ${isActive ? 'active' : ''}`;
            }}
          >
            Home
          </NavLink>
          {/* <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li> */}
          {/* <li className='nav-item'>
            <a className='nav-link' href='#'>
              Features
            </a>
          </li> */}
          <NavLink
            to='/about'
            className={({ isActive }) => {
              // console.log(isActive);
              return `nav-link ${isActive ? 'active' : ''}`;
            }}
          >
            About
          </NavLink>
          <NavLink
            to='/login'
            className={({ isActive }) => {
              // console.log(isActive);
              return `nav-link ${isActive ? 'active' : ''}`;
            }}
          >
            Login
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
