import { useForm } from "./use-form";

function Form() {
  const { text, handleChange, handleSubmit } = useForm();

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
