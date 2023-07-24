import React, { useEffect, useState } from 'react';
import { Message } from './Message';

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

  useEffect(() => {
    // console.log('usefe se llamo');
  }, []);

  useEffect(() => {
    // console.log('formState se llamo');
  }, [formState]);
  useEffect(() => {
    // console.log('email se llamo');
  }, [email]);

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
      {username === 'michael2' && <Message />}
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
