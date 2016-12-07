import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import Perf from 'react-addons-perf';
import rootReducer from './reducers';
import TodoMap from './records/TodoMap';
import Todo from './records/Todo';
import App from './App';

window.Perf = Perf;

const initialState = {
  todos: new TodoMap({
    "1": new Todo({id: 1, title: 'Blah'}),
    "2": new Todo({id: 2, title: 'Hello World'}),
    "3": new Todo({id: 3, title: 'Foo Bar'}),
  }),
}

const middlewares = [
  createLogger(),
]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);