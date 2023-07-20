import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GitGrid = ({ category }) => {
  const [state, setstate] = useState(10);

  useEffect(() => {
    getGifs(category).then((tt) => console.log(tt));
    // console.log(t);
    // return () => {};
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div>HOLA</div>
    </>
  );
};
