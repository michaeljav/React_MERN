import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem/>', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  //en cada uno de las preubas las funciones arriba estaran como si estuvieran recien cradas
  beforeEach(() => jest.clearAllMocks()); //

  test('debe de mostrar el Todo Pendiente de completar', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );
    // screen.debug();
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');

    // screen.debug();
    // console.log(liElement);
  });
  test('debe de mostrar el Todo Completado', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');

    // screen.debug();
    // console.log(liElement);
  });

  test('span debe de llamar el ToggleTODO  cuando se hace click', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    //simular el click sobre el elemento span
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id); //porque al inicia es 1 que tiene el todo
  });

  test('button debe de llamar el deleteTodo', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const btnDelete = screen.getByLabelText('btnDelete');
    fireEvent.click(btnDelete);
    // screen.debug();
    //simular el click sobre el elemento span
    // fireEvent.click(spanElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id); //
  });
});
