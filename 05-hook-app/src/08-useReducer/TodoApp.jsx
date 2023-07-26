import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      description: 'Recolectar las pieras del alam',
      done: false,
    },
    {
      id: new Date().getTime() * 3,
      description: 'Recolectar las pieras del todo',
      done: false,
    },
  ];

  //reducer  inicializadora, funcion inicializadora en caso de proceso pesado
  //--El reducer (todoReducer) no se ejecuta, simplemente paso la refercencia a la funcion para que se ejecute cuando tenga que hacerlo el useReducer.
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log(todo);
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };
    dispatch(action);
  };
  return (
    <>
      <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} />
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
