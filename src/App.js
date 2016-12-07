import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import { makeGetTodoIdsSelector } from './selectors/todosSelector';

const mapStateToProps = state => {
  const getTodoIdsSelector = makeGetTodoIdsSelector();
  return {
    todos: getTodoIdsSelector(state),
  };
}

export default connect(mapStateToProps)(TodoList);