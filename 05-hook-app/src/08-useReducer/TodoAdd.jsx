import React from 'react';
import { useForm } from '../hooks/useForm';
import PropTypes from 'prop-types';
export const TodoAdd = ({ onNewTodo }) => {
  const { description, formState, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };

    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        className='form-control'
        placeholder='Que hay que hacer?'
        name='description'
        value={description}
        onChange={onInputChange}
      />
      <button className='btn btn-outline-primary mt-1'>Agregar</button>
    </form>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
