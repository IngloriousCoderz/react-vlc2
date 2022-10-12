import { useSelector, useDispatch } from "react-redux";

import { selectText } from "../store/selectors";
import { setText } from "../store/action-creators";
import { addTaskOnServer } from "../store/thunks";

export function useForm() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(setText(event.target.value));
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTaskOnServer(text));
  };

  return { text, handleChange, handleSubmit };
}
