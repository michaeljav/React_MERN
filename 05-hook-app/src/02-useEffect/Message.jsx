import React, { useEffect } from 'react';

export const Message = () => {
  useEffect(() => {
    console.log('Message mounted');
    return () => {
      console.log('Message Unmounted');
    };
  }, []);
  return (
    <>
      <h1>Usuario ya Existe</h1>
    </>
  );
};
