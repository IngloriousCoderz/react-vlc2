export default class Counter {
  constructor(value = 0) {
    this.value = value;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  setValue(value) {
    this.value = value;
  }
}
