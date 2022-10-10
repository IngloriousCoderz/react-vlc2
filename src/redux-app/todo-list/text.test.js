import text from "./text";
import { setText } from "./action-creators";

it("should initialize with an empty text", () => {
  const stateBefore = undefined;
  const action = { type: "anyAction" };
  const stateAfter = "";

  const state = text(stateBefore, action);

  expect(state).toBe(stateAfter);
});

it("should change the text", () => {
  const stateBefore = "some text";
  const action = setText("some other text");
  const stateAfter = "some other text";

  const state = text(stateBefore, action);

  expect(state).toBe(stateAfter);
});
