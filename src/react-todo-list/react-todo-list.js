import { useState, useEffect } from "react";

import Form from "./form/form";
import List from "./list";

import * as api from "../services/api";

const DEFAULT_TASKS = [];

function ReactTodoList() {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log("a second has passed");
  //   }, 1000);

  //   return () => {
  //     clearInterval(id);
  //   }; // componentWillUnmount
  // }, []); // componentDidMount

  // useEffect(() => {}, [tasks]); // componentDidMount + componentDidUpdate IF

  // useEffect(() => {}); // componentDidMount + componentDidUpdate SEMPRE

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasks = await api.fetchTasks();
    setTasks(tasks);
  };

  const handleSubmit = async (text) => {
    const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
    const task = { id: maxId + 1, text, completed: false };
    await api.addTask(task);

    fetchTasks();
  };

  const handleToggle = async (id) => {
    const task = tasks.find((task) => task.id === id);
    await api.updateTask(id, { completed: !task.completed });

    fetchTasks();
  };

  const handleRemove = async (id) => {
    await api.deleteTask(id);

    fetchTasks();
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <List tasks={tasks} onToggle={handleToggle} onRemove={handleRemove} />
    </>
  );
}

export default ReactTodoList;
