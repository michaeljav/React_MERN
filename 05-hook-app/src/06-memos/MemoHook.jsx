import React, { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
  for (let index = 0; index < iterationNumber; index++) {
    console.log('ahi vamos');
  }
  return `${iterationNumber} iteraciones realizadas`;
};
export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  //solo memorizara  cuando el valor del counter cambia.
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        COunter <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>
      <button className='btn btn-primary' onClick={() => increment(1)}>
        +1
      </button>
      <button
        className='btn btn-outline-primary'
        onClick={() => setShow(!show)}
      >
        Show/Hiden {JSON.stringify(show)}
      </button>
    </>
  );
};
