import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    'https://api.breakingbadquotes.xyz/v1/quotes/1'
  );

  //si la data tiene un valor entoncers toma la data en la posicion 0
  const { author, quote } = !!data && data[0];
  console.log({ data, isLoading, hasError });
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <div className='alert alert-info text-center'>Loading</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <p className='mb-1'>{quote}</p>
          <footer className='blockquote-footer mt-1'>{author}</footer>
        </blockquote>
      )}

      <button className='btn btn-primary'>Next Quote</button>
    </>
  );
};
