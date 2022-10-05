import cn from "classnames";
import { useState } from "react";

import classes from "./react-todo-list.module.scss";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function ReactTodoList() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      return [...tasks, { id: maxId + 1, text, completed: false }];
    });

    setText("");
  };

  const handleToggle = (id) => (event) => {
    // clone & change
    // setTasks((tasks) => {
    //   const clone = [...tasks];
    //   const index = clone.findIndex((task) => task.id === id);
    //   clone[index].completed = !clone[index].completed;
    //   return clone;
    // });
    // "sandwich"
    // setTasks((tasks) => {
    //   const index = tasks.findIndex((task) => task.id === id);
    //   return [
    //     ...tasks.slice(0, index),
    //     { ...tasks[index], completed: !tasks[index].completed },
    //     ...tasks.slice(index + 1),
    //   ];
    // });

    // array method
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemove = (id) => (event) => {
    // clone & change
    // setTasks((tasks) => {
    //   const clone = [...tasks];
    //   const index = clone.findIndex((task) => task.id === id);
    //   clone.splice(index, 1);
    //   return clone;
    // });

    // "sandwich"
    // setTasks((tasks) => {
    //   const index = tasks.findIndex((task) => task.id === id);
    //   return [...tasks.slice(0, index), ...tasks.slice(index + 1)];
    // });

    // array method
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What next?"
          autoFocus
          value={text}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
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
    </>
  );
}

export default ReactTodoList;
