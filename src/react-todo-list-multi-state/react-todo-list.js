import { useState } from "react";

import Form from "./form/form";
import List from "./list";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function ReactTodoList() {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  const handleSubmit = (text) => {
    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      return [...tasks, { id: maxId + 1, text, completed: false }];
    });
  };

  const handleToggle = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemove = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <List tasks={tasks} onToggle={handleToggle} onRemove={handleRemove} />
    </>
  );
}

export default ReactTodoList;
