const initialState = [
  {
    id: 1,
    todo: 'Recolecatr las piedra del Alma',
    done: false,
  },
];

//funcion que cambia el estado
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case '[TODO] add todo':
      return [...state, action.payload];
    default:
      return state;
  }
};

//nevo
let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolecatr las piedra del poder',
  done: false,
};

//actions
const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
