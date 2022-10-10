import Counter from "./counter.class";

it("should initialize with 0", () => {
  // given
  const counter = new Counter();

  // when

  // then
  expect(counter.value).toBe(0);
});

it("should increment by one", () => {
  // given
  const counter = new Counter(0);

  // when
  counter.increment();

  // then
  expect(counter.value).toBe(1);
});

it("should decrement by one", () => {
  // given
  const counter = new Counter(0);

  // when
  counter.decrement();

  // then
  expect(counter.value).toBe(-1);
});

it("should set a specific value", () => {
  // given
  const counter = new Counter(0);

  // when
  counter.setValue(5);

  //then
  expect(counter.value).toBe(5);
});
