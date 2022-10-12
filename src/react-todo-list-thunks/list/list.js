import cn from "classnames";

import { useList } from "./use-list";
import classes from "./list.module.scss";

function List() {
  const { tasks, handleToggle, handleRemove } = useList();

  return (
    <ul>
      {tasks.map(({ id, text, completed }) => (
        <li key={id}>
          <span
            className={cn({ [classes.completed]: completed })}
            onClick={handleToggle(id)}
          >
            {text}
          </span>
          <button onClick={handleRemove(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
