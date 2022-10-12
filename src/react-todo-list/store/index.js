import { configureStore } from "@reduxjs/toolkit";

import text from "react-todo-list/form/text.slice";
import tasks from "react-todo-list/list/tasks.slice";

const store = configureStore({
  reducer: { text, tasks },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
