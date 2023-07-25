import React, { memo } from 'react';

//memorizar el componente hijo.
export const Hijo = memo(({ numero, incrementar }) => {
  console.log('  Me volví a generar :(  ');

  return (
    <button
      className='btn btn-primary mr-3'
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
