import { createSlice } from "@reduxjs/toolkit";

import { taskAdded } from "react-todo-list/store/action-creators";

const slice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    taskToggled(state, action) {
      const task = state.find((task) => task.id === action.payload);
      task.completed = !task.completed;
    },

    taskRemoved(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: {
    [taskAdded](state, action) {
      const maxId = state.length ? state[state.length - 1].id : 0;
      state.push({ id: maxId + 1, text: action.payload });
    },
  },
});

export const { taskToggled, taskRemoved } = slice.actions;
export default slice.reducer;
