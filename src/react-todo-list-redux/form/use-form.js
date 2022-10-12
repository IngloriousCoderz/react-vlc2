import { useSelector, useDispatch } from "react-redux";

import { selectText } from "../store/selectors";
import { setText, addTask } from "../store/action-creators";

export function useForm() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(setText(event.target.value));
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(text));
  };

  return { text, handleChange, handleSubmit };
}
