import { useSelector, useDispatch } from "react-redux";

import { selectTasks } from "../store/selectors";
import { toggleCompleted, removeTask } from "../store/action-creators";

export function useList() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleToggle = (id) => (event) => dispatch(toggleCompleted(id));
  const handleRemove = (id) => (event) => dispatch(removeTask(id));

  return { tasks, handleToggle, handleRemove };
}
