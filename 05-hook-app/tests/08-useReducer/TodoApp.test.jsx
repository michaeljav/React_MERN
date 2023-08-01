import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en <TodoApp/>', () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: 'Todo #1' },
      { id: 2, description: 'Todo #2' },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });
  test('debe de mostrar el componenten correctamente', () => {
    render(<TodoApp />);
    expect(screen.getByText('Todo #1')).toBeTruthy();
    expect(screen.getByText('Todo #2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy(); //ese textbox es el input del form todoadd
    console.log(screen.getByRole('textbox').name);
  });
});
