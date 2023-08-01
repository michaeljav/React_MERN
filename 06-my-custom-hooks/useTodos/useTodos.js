import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

//inicializar el reducer con lo que tiene en el local storage
const init = () => {
  //si no tiene valor  pasara []
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: 'Recolectar las pieras del alam',
    //   done: false,
    // },
  ];

  //reducer  inicializadora, funcion inicializadora en caso de proceso pesado
  //--El reducer (todoReducer) no se ejecuta, simplemente paso la refercencia a la funcion para que se ejecute cuando tenga que hacerlo el useReducer.
  //--funcion tercera que inicializa nuestro reducer
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos || []));
  }, [todos]);

  const handleNewTodo = (todo) => {
    // console.log(todo);
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  };
  const onToggleTodo = (id) => {
    // console.log(id);
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id,
    });
  };

  // const todosCount = () => {
  //   return todos.length;
  // };
  // const pendingTodosCount = () => {
  //   return todos.filter((todo) => todo.done !== true).length;
  // };
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => todo.done !== true).length,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
  };
};
