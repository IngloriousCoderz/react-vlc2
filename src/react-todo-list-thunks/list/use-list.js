import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectTasks } from "../store/selectors";
import {
  toggleCompletedOnServer,
  removeTaskOnServer,
  fetchTasksFromServer,
} from "../store/thunks";

export function useList() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksFromServer());
  }, [dispatch]);

  const handleToggle = (id) => (event) => dispatch(toggleCompletedOnServer(id));
  const handleRemove = (id) => (event) => dispatch(removeTaskOnServer(id));

  return { tasks, handleToggle, handleRemove };
}
