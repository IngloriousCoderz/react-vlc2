import cn from "classnames";
import { Component } from "react";

import classes from "./react-todo-list.module.scss";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

class ReactTodoListClass extends Component {
  state = {
    text: "",
    tasks: DEFAULT_TASKS,
  };

  componentDidMount() {
    console.log("mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updated!", prevProps, prevState);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("updating?", nextProps, nextState);
    return true;
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }

  render() {
    const { text, tasks } = this.state;

    const handleChange = (event) => {
      this.setState({ text: event.target.value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      this.setState((state) => {
        const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;

        return {
          tasks: [...tasks, { id: maxId + 1, text, completed: false }],
          text: "",
        };
      });
    };

    const handleToggle = (id) => (event) => {
      // clone & change
      // setTasks((tasks) => {
      //   const clone = [...tasks];
      //   const index = clone.findIndex((task) => task.id === id);
      //   clone[index].completed = !clone[index].completed;
      //   return clone;
      // });
      // "sandwich"
      // setTasks((tasks) => {
      //   const index = tasks.findIndex((task) => task.id === id);
      //   return [
      //     ...tasks.slice(0, index),
      //     { ...tasks[index], completed: !tasks[index].completed },
      //     ...tasks.slice(index + 1),
      //   ];
      // });

      // array method
      this.setState((state) => ({
        tasks: tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ),
      }));
    };

    const handleRemove = (id) => (event) => {
      // clone & change
      // setTasks((tasks) => {
      //   const clone = [...tasks];
      //   const index = clone.findIndex((task) => task.id === id);
      //   clone.splice(index, 1);
      //   return clone;
      // });

      // "sandwich"
      // setTasks((tasks) => {
      //   const index = tasks.findIndex((task) => task.id === id);
      //   return [...tasks.slice(0, index), ...tasks.slice(index + 1)];
      // });

      // array method
      this.setState((state) => ({
        tasks: tasks.filter((task) => task.id !== id),
      }));
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="What next?"
            autoFocus
            value={text}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
        <ul>
          {tasks.map(({ id, text, completed }) => (
            <li key={id}>
              <span
                className={cn({ [classes.completed]: completed })}
                onClick={handleToggle(id)}
              >
                {text}
              </span>
              <button onClick={handleRemove(id)}>x</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ReactTodoListClass;
