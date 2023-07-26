import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [] }) => {
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        // eslint-disable-next-line react/jsx-key
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
