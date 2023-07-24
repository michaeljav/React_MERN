import React, { useState } from 'react';

export const SimpleForms = () => {
  const [formState, setFormState] = useState({
    username: 'michael',
    email: 'michaeljavier@gmail.com',
  });

  const { username, email } = formState;

  //del evento desestruct target
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Formula Simple</h1>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='email'
        className='form-control mt-2'
        placeholder='michaeljm@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
