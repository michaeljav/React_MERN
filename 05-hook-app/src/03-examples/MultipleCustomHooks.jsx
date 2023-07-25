import React from 'react';
// import { useFetch } from '../hooks/useFetch';
// import { useCounter } from '../hooks/useCounter';

import { Quote, LoadingQuote } from './';
import { useFetch, useCounter } from '../hooks/';
// import { LoadingQuote } from './LoadingQuote';
// import { Quote } from './Quote';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  //si la data tiene un valor entoncers toma la data en la posicion 0
  const { author, quote } = !!data && data[0];
  // console.log({ data, isLoading, hasError });
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className='btn btn-primary'
        onClick={() => increment(1)}
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  );
};
