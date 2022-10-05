import cn from "classnames";

import classes from "./list.module.scss";

function List({ tasks, onToggle, onRemove }) {
  const handleToggle = (id) => (event) => onToggle(id);
  const handleRemove = (id) => (event) => onRemove(id);

  console.log("render");

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
