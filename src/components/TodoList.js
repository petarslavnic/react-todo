import React, { PureComponent, PropTypes } from 'react';
import ConnectedTodoListItem from './TodoListItem';

class TodoList extends PureComponent {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map(id => <ConnectedTodoListItem id={id} key={id} />)}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired,
}

export default TodoList;