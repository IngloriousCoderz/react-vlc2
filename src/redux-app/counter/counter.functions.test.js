import { increment, decrement, setValue } from "./counter.functions";

it("should increment by one", () => {
  // given

  // when
  const value = increment(0);

  // then
  expect(value).toBe(1);
});

it("should decrement by one", () => {
  // given

  // when
  const value = decrement(0);

  // then
  expect(value).toBe(-1);
});

it("should set a specific value", () => {
  // given

  // when
  const value = setValue(0, 5);

  //then
  expect(value).toBe(5);
});
