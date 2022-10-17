import { memo } from "react";

// hof - higher-order function
const sum = (a) => (b) => a + b;

// hoc - higher-order-component
const createComponent = (name) => (Component) =>
  name === "Antony" ? <Component name={name} /> : <></>;

createComponent("Antony");

function List() {
  return <ul></ul>;
}

export default memo(List);
