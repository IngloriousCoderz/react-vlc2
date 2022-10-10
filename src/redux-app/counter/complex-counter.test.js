import counter, { increment, decrement, setValue } from "./complex-counter";

it("should initialize with 0", () => {
  // given
  const stateBefore = undefined;
  const action = { type: "anyAction" };
  const stateAfter = { value: 0 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toEqual(stateAfter);
});

it("should increment by one", () => {
  // given
  const stateBefore = { value: 0 };
  const action = increment();
  const stateAfter = { value: 1 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toEqual(stateAfter);
});

it("should decrement by one", () => {
  // given
  const stateBefore = { value: 0 };
  const action = decrement();
  const stateAfter = { value: -1 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toEqual(stateAfter);
});

it("should set a specific value", () => {
  // given
  const stateBefore = { value: 0 };
  const action = setValue(5);
  const stateAfter = { value: 5 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toEqual(stateAfter);
});

it("should return the same state", () => {
  // given
  const stateBefore = { value: 0 };
  const action = { type: "anyAction" };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateBefore);
});
