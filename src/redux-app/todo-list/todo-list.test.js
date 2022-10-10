import todoList from "./todo-list";
import {
  setText,
  addTask,
  toggleCompleted,
  removeTask,
} from "./action-creators";

it("should initialize the app", () => {
  const stateBefore = undefined;
  const action = { type: "anyAction" };
  const stateAfter = { text: "", tasks: [] };

  const state = todoList(stateBefore, action);

  expect(state).toEqual(stateAfter);
});

it("should change the text", () => {
  const stateBefore = {
    text: "some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = setText("some other text");
  const stateAfter = {
    text: "some other text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toEqual(stateAfter);
});

it("should add a new task", () => {
  const stateBefore = {
    text: "some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
    ],
  };
  const action = addTask("Forget everything");
  const stateAfter = {
    text: "",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toEqual(stateAfter);
});

it("should toggle the completed state on a task", () => {
  const stateBefore = {
    text: "some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = toggleCompleted(2);
  const stateAfter = {
    text: "some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: true },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toEqual(stateAfter);
});

it("should remove a task", () => {
  const stateBefore = {
    text: "some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = removeTask(2);
  const stateAfter = {
    text: "some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toEqual(stateAfter);
});
