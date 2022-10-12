import { useTodoList } from "./use-todo-list";
import Form from "./form/form";
import List from "./list";

function ReactTodoList() {
  const { tasks, handleSubmit, handleToggle, handleRemove } = useTodoList();

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <List tasks={tasks} onToggle={handleToggle} onRemove={handleRemove} />
    </>
  );
}

export default ReactTodoList;
