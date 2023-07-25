import React, { useRef } from 'react';

export const FocusScreen = () => {
  //nos permite tener una referencia y cuando esa referenecia cambi
  //no dipare una renderizacion del componente.
  const inputRef = useRef();

  console.log(inputRef);
  const onClick = () => {
    // document.querySelector('input').select();
    // document.querySelector('input').focus();
    console.log(inputRef);
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type='text'
        className='form-control'
        placeholder='Ingrese su nombre'
      />
      <button className='btn btn-primary mt-2' onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
