import { useEffect, useReducer } from 'react';
// import { todoReducer } from './todoReducer';
// import { TodoList } from './TodoList';
// import { TodoAdd } from './TodoAdd';
import { TodoList, TodoAdd } from './';
import { useTodos } from '../hooks/useTodos';

export const TodoApp = () => {
  //customhooks
  const { todos, handleDeleteTodo, onToggleTodo, handleNewTodo } = useTodos();

  return (
    <>
      <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
