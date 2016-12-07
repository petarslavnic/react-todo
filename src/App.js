import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import { makeGetTodoIds } from './selectors/todosSelector';

const mapStateToProps = state => {
  const getTodoIds = makeGetTodoIds();
  return {
    todos: getTodoIds(state),
  };
}

export default connect(mapStateToProps)(TodoList);