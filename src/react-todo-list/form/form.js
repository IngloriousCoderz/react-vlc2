import { useContext } from "react";
import { setText, addTask } from "react-todo-list/logic/action-creators";
import {
  DispatchContext,
  StateContext,
} from "react-todo-list/todo-list.context";

function Form() {
  const { text } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const handleChange = (event) => dispatch(setText(event.target.value));
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(text));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What next?"
        autoFocus
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
