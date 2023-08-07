import React from 'react';
import { HeroCard } from '../components/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  //para cojer el quiery de la url
  const location = useLocation();

  //voy a desestructura solo q y si no viene envio vacio
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;
  // console.log(query);
  //para que cuando refresquemos si ya hemos buscado, que el valor se mantenta el que teniamo en el query url
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    // if (searchText.trim().length <= 1) {
    //   return;
    // }

    // navigate(`?q=${searchText.toLowerCase().trim()}`);
    navigate(`?q=${searchText}`);
    console.log({ searchText });
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              className='form-control'
              placeholder='Search a hero'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary m-1'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {/* {q === '' ? (
            <div className='alert alert-primary'>Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className='alert alert-danger'>
                No hero with <b>{q}</b>
              </div>
            )
          )} */}

          <div
            className='alert alert-primary'
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>
          <div
            aria-label='alert-danger'
            className='alert alert-danger'
            style={{ display: showError ? '' : 'none' }}
          >
            No hero with <b>{q}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};
