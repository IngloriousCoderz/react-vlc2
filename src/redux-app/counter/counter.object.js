const counter = {
  value: 0,

  increment() {
    this.value++;
  },

  decrement() {
    this.value--;
  },

  setValue(value) {
    this.value = value;
  },
};

export default counter;
