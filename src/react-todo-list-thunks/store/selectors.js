import { createSelector } from "@reduxjs/toolkit";

export const selectText = (state) => state.text;
export const selectTasks = (state) => state.tasks;

export const selectTasksLeft = createSelector(
  selectTasks,
  (tasks) => tasks.filter((task) => !task.completed).length
);
