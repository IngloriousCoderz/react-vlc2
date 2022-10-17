import { Provider } from "react-redux";

import store from "./store";
import ReactTodoListComponent from "./react-todo-list";

function ReactTodoList(props) {
  return (
    <Provider store={store}>
      <ReactTodoListComponent {...props} />
    </Provider>
  );
}

export default ReactTodoList;
