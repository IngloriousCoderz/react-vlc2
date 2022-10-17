import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as api from "services/api";

export const tasksRequested = createAsyncThunk("tasks/on-fetch", async () =>
  api.fetchTasks()
);

export const taskToggled = createAsyncThunk(
  "tasks/on-toggle",
  async (id, { dispatch, getState }) => {
    const { tasks } = getState();
    const task = tasks.find((task) => task.id === id);
    await api.updateTask(id, { completed: !task.completed });
    dispatch(tasksRequested());
  }
);

export const taskRemoved = createAsyncThunk(
  "tasks/on-remove",
  async (id, { dispatch }) => {
    await api.deleteTask(id);
    dispatch(tasksRequested());
  }
);

const slice = createSlice({
  name: "tasks",
  initialState: { isLoading: false, data: [] },
  extraReducers: {
    [tasksRequested.pending](state, action) {
      state.isLoading = true;
    },

    [tasksRequested.fulfilled](state, action) {
      state.isLoading = false;
      state.data = action.payload;
      // return action.payload;
    },
  },
});

export default slice.reducer;

export const selectTasks = (state) => state.tasks;
