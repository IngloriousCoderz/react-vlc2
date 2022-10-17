import { selectText, selectTasks, selectTasksLeft } from "./selectors";

it("should select the text from the state", () => {
  const state = {
    text: "some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const expectedText = "some text";

  const text = selectText(state);

  expect(text).toBe(expectedText);
});

it("should select the tasks from the state", () => {
  const state = {
    text: "some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const expectedTasks = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];

  const text = selectTasks(state);

  expect(text).toEqual(expectedTasks);
});

it("should return the number of uncompleted tasks", () => {
  const state = {
    text: "some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const expectedTasksLeft = 2;

  const text = selectTasksLeft(state);

  expect(text).toBe(expectedTasksLeft);
});
