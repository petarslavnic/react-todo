import TodoMap from '../records/TodoMap';
import Todo from '../records/Todo';

const todo = (state = new Todo(), action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return new Todo({
        id: action.id,
        title: state.title,
        completed: !state.completed
      });
    default:
      return state;
  }
}

const todos = (state = new TodoMap(), action) => {
  switch(action.type) {
    case 'TOGGLE_TODO':
      return state.set(action.id.toString(), todo(state.get(action.id.toString()), action));
    default:
      return state;
  }
}

export default todos;