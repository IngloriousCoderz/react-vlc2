import { setTasks, setText } from "./action-creators";
import * as api from "../../services/api";

export const fetchTasksFromServer = () => async (dispatch) => {
  const tasks = await api.fetchTasks();
  dispatch(setTasks(tasks));
};

export const addTaskOnServer = (text) => async (dispatch) => {
  await api.addTask({ text });
  dispatch(setText(""));
  dispatch(fetchTasksFromServer());
};

export const toggleCompletedOnServer = (id) => async (dispatch, getState) => {
  const { tasks } = getState();
  const task = tasks.find((task) => task.id === id);
  await api.updateTask(id, { completed: !task.completed });
  dispatch(fetchTasksFromServer());
};

export const removeTaskOnServer = (id) => async (dispatch) => {
  await api.deleteTask(id);
  dispatch(fetchTasksFromServer());
};
