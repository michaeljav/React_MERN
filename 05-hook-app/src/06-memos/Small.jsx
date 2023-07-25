import React, { memo } from 'react';
import PropTypes from 'prop-types';

//si las propertys no cambian no vuelve a redibujar el componente
export const Small = memo(({ value }) => {
  console.log('me volvi a dibujar');

  return <small>{value}</small>;
});

Small.prototypes = {
  value: PropTypes.string.isRequired,
};
