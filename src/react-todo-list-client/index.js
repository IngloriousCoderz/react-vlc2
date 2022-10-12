export { default } from "./react-todo-list";

// import { useState, useEffect } from "react";

// import ReactTodoListComponent from "./react-todo-list";
// import * as api from "../services/api";

// const DEFAULT_TASKS = [];

// function ReactTodoList(props) {
//   const [tasks, setTasks] = useState(DEFAULT_TASKS);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     const tasks = await api.fetchTasks();
//     setTasks(tasks);
//   };

//   const handleSubmit = async (text) => {
//     const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
//     const task = { id: maxId + 1, text, completed: false };
//     await api.addTask(task);

//     fetchTasks();
//   };

//   const handleToggle = async (id) => {
//     const task = tasks.find((task) => task.id === id);
//     await api.updateTask(id, { completed: !task.completed });

//     fetchTasks();
//   };

//   const handleRemove = async (id) => {
//     await api.deleteTask(id);

//     fetchTasks();
//   };

//   return (
//     <ReactTodoListComponent
//       tasks={tasks}
//       onSubmit={handleSubmit}
//       onToggle={handleToggle}
//       onRemove={handleRemove}
//       {...props}
//     />
//   );
// }

// export default ReactTodoList;
