// import { createStore } from "redux";

import rootReducer from "./todo-list";
import {
  setText,
  addTask,
  toggleCompleted,
  removeTask,
} from "./action-creators";

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setText("some text")); // { text: 'some text', tasks: [] }
store.dispatch(addTask("some text")); // { text: '', tasks: [{ id: 1, text: 'some text' }] }
store.dispatch(toggleCompleted(1)); // { text: '', tasks: [{ id: 1, text: 'some text', completed: true }] }
store.dispatch(removeTask(1)); // { text: '', tasks: [] }

function createStore(reducer) {
  const handlers = [];

  return {
    subscribe(handler) {
      handlers.push(handler);
    },

    dispatch(action) {
      this.state = reducer(this.state, action);
      handlers.forEach((handler) => handler());
    },

    getState() {
      return this.state;
    },
  };
}
