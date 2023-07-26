import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {
  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: 'Recolectar las pieras del alam',
    //   done: false,
    // },
  ];

  //inicializar el reducer con lo que tiene en el local storage
  const init = () => {
    //si no tiene valor  pasara []
    return JSON.parse(localStorage.getItem('todos')) || [];
  };
  //reducer  inicializadora, funcion inicializadora en caso de proceso pesado
  //--El reducer (todoReducer) no se ejecuta, simplemente paso la refercencia a la funcion para que se ejecute cuando tenga que hacerlo el useReducer.
  //--funcion tercera que inicializa nuestro reducer
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos || []));
  }, [todos]);

  const handleNewTodo = (todo) => {
    console.log(todo);
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

  return (
    <>
      <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
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
