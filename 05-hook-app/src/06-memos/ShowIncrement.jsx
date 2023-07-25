/* eslint-disable react/display-name */
import React, { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  console.log('Me volvi a incrementar');
  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
