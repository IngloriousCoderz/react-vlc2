import { useSelector, useDispatch } from "react-redux";

import { taskAdded } from "react-todo-list-stories/store/thunks";
import { textChanged, selectText } from "./text.slice";

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
