import { useSelector, useDispatch } from "react-redux";

import { selectTasks } from "react-todo-list/store/selectors";
import { taskToggled, taskRemoved } from "./tasks.slice";

export function useList() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleToggle = (id) => (event) => dispatch(taskToggled(id));
  const handleRemove = (id) => (event) => dispatch(taskRemoved(id));

  return { tasks, handleToggle, handleRemove };
}
