import { Record } from 'immutable';

const TodoRecord = Record({
  id: 0,
  title: '',
  completed: false,
});

class Todo extends TodoRecord {
  constructor(data) {
    super(data);
  }
}

export default Todo;