import tasks from "./tasks";
import { addTask, toggleCompleted, removeTask } from "./action-creators";

it("should initialize with an empty array", () => {
  const stateBefore = undefined;
  const action = { type: "anyAction" };
  const stateAfter = [];

  const state = tasks(stateBefore, action);

  expect(state).toEqual(stateAfter);
});

it("create a new task", () => {
  const stateBefore = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
  ];
  const action = addTask("Forget everything");
  const stateAfter = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];

  const state = tasks(stateBefore, action);

  expect(state).toEqual(stateAfter);
});

it("should toggle the 'completed' state on a task", () => {
  const stateBefore = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = toggleCompleted(2);
  const stateAfter = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: true },
    { id: 3, text: "Forget everything" },
  ];

  const state = tasks(stateBefore, action);

  expect(state).toEqual(stateAfter);
});

it("should remove a task", () => {
  const stateBefore = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = removeTask(2);
  const stateAfter = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 3, text: "Forget everything" },
  ];

  const state = tasks(stateBefore, action);

  expect(state).toEqual(stateAfter);
});
