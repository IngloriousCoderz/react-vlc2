import { useReducer } from "react";

import Form from "./form/form";
import List from "./list";
import rootReducer from "react-todo-list/logic/todo-list";

import { StateContext } from "./todo-list.context";
import { DispatchContext } from "./todo-list.context";

const DEFAULT_STATE = {
  text: "",
  tasks: [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ],
};

function ReactTodoList() {
  const [state, dispatch] = useReducer(rootReducer, DEFAULT_STATE);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Form />
        <List />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default ReactTodoList;
