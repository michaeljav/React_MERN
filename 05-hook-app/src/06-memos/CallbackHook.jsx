import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //sirve para memorizar funciones. Nota usando el memo metodo no funciona porque el objecto funcion cada ve que se renderisa crea otro objecto en memoria por lo cual es una nueva prop que se envia al hijo y memo metodo, la detecta como otra ya que es otro objeto funcion.  pero usecallback memoriza la funcion
  const incrementFather = useCallback((value) => {
    // console.log('Entro a la funcion ', counter);
    setCounter((c) => c + value);
    // setCounter(counter + 1);
  }, []);

  useEffect(() => {
    // incrementFather();
  }, [incrementFather]);

  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <h1> useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
