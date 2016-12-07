import { createSelectorCreator, defaultMemoize } from 'reselect';
import { is } from 'immutable';

const customSelector = createSelectorCreator(defaultMemoize, is);

export const getTodoById = (state, id) => state.todos.get(id.toString());
export const getTodosIds = (state) => state.todos.map(t => t.id);

export const getTodoIdsSelector = customSelector(
  [getTodosIds],
  ids => ids.toArray()
);

export const makeGetTodoIdsSelector = () => getTodoIdsSelector;