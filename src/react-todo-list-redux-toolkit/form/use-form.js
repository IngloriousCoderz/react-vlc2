import { useSelector, useDispatch } from "react-redux";

import { selectText } from "react-todo-list/store/selectors";
import { taskAdded } from "react-todo-list/store/action-creators";
import { textChanged } from "./text.slice";

export function useForm() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(textChanged(event.target.value));
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(taskAdded(text));
  };

  return { text, handleChange, handleSubmit };
}
