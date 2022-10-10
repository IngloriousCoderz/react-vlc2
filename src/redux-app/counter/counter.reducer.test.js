import counter, { increment, decrement, setValue } from "./counter.reducer";

it("should initialize with 0", () => {
  // given
  const stateBefore = undefined;
  const action = { type: "anyAction" };
  const stateAfter = 0;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});

it("should increment by one", () => {
  // given
  const stateBefore = 0;
  const action = increment();
  const stateAfter = 1;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});

it("should decrement by one", () => {
  // given
  const stateBefore = 0;
  const action = decrement();
  const stateAfter = -1;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});

it("should set a specific value", () => {
  // given
  const stateBefore = 0;
  const action = setValue(5);
  const stateAfter = 5;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});
