import cn from "classnames";
import { useState, useRef } from "react";

import classes from "./react-todo-list.module.scss";

function ReactTodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ]);

  const input = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = input.current.value;

    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      return [...tasks, { id: maxId + 1, text, completed: false }];
    });

    input.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="What next?" autoFocus ref={input} />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map(({ id, text, completed }) => (
          <li key={id} className={cn({ [classes.completed]: completed })}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReactTodoList;
