import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListComponent from "./list";
import {
  selectTasks,
  taskRemoved,
  tasksRequested,
  taskToggled,
} from "./tasks.slice";

function List(props) {
  const { data, isLoading } = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tasksRequested());
  }, [dispatch]);

  const handleToggle = (id) => dispatch(taskToggled(id));
  const handleRemove = (id) => dispatch(taskRemoved(id));

  return (
    <ListComponent
      {...props}
      data={data}
      isLoading={isLoading}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  );
}

export default List;
