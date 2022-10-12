import { useState, useEffect } from "react";

import * as api from "../services/api";

const DEFAULT_TASKS = [];

export function useTodoList() {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasks = await api.fetchTasks();
    setTasks(tasks);
  };

  const handleSubmit = async (text) => {
    await api.addTask({ text });

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

  return { tasks, handleSubmit, handleToggle, handleRemove };
}
