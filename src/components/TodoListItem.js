import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTodoById } from '../selectors/todosSelector';

export class TodoListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleTodo = this.toggleTodo.bind(this);
  }
  
  toggleTodo() {
    console.log("Toggle Todo!");
    this.props.onToggleTodo(this.props.id)
  }
  
  render() {
    const { title, completed } = this.props;
    return (
      <li
        onClick={this.toggleTodo}
      >
        <span
          style={{textDecoration: completed ? 'line-through' : 'none'}}
        >{title}</span>
      </li>
    );
  }
}

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onToggleTodo: PropTypes.func
}

TodoListItem.defaultProps = {
  onToggleTodo: () => null,
}

const mapStateToProps = (state, { id }) => {
  const todo = getTodoById(state, id);
  return {
    id,
    title: todo.title,
    completed: todo.completed
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo(id) {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);