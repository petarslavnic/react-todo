import { createSelectorCreator, defaultMemoize } from 'reselect';
import { is } from 'immutable';

const customSelector = createSelectorCreator(defaultMemoize, is);

export const getTodoById = (state, id) => state.todos.get(id.toString());
export const getTodos = (state) => state.todos;

export const getTodoIds = customSelector(
  [getTodos],
  todos => todos.map(t => t.id).toArray()
);

export const makeGetTodoIds = () => getTodoIds;