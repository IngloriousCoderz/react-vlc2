/**
 * Counter:
 *
 * value: 0
 * increment()
 * decrement()
 * setValue(value)
 */

import counter from "./counter.object";

it("should increment by one", () => {
  // given
  counter.value = 0;

  // when
  counter.increment();

  // then
  expect(counter.value).toBe(1);
});

it("should decrement by one", () => {
  // given
  counter.value = 0;

  // when
  counter.decrement();

  // then
  expect(counter.value).toBe(-1);
});

it("should set a specific value", () => {
  // given
  counter.value = 0;

  // when
  counter.setValue(5);

  //then
  expect(counter.value).toBe(5);
});
