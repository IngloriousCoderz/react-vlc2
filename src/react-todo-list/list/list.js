import cn from "classnames";
import { useContext } from "react";
import {
  removeTask,
  toggleCompleted,
} from "react-todo-list/logic/action-creators";
import {
  DispatchContext,
  StateContext,
} from "react-todo-list/todo-list.context";

import classes from "./list.module.scss";

function List() {
  const { tasks } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const handleToggle = (id) => dispatch(toggleCompleted(id));
  const handleRemove = (id) => dispatch(removeTask(id));

  return (
    <ul>
      {tasks.map(({ id, text, completed }) => (
        <li key={id}>
          <span
            className={cn({ [classes.completed]: completed })}
            onClick={() => handleToggle(id)}
          >
            {text}
          </span>
          <button onClick={() => handleRemove(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
