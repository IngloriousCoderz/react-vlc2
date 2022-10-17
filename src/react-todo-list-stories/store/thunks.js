import { createAsyncThunk } from "@reduxjs/toolkit";

import { tasksRequested } from "react-todo-list-stories/list/tasks.slice";
import * as api from "services/api";

export const taskAdded = createAsyncThunk(
  "app/on-add",
  async (text, { dispatch }) => {
    await api.addTask({ text });
    dispatch(tasksRequested());
  }
);
