import { useSelector } from "react-redux";

import { selectTasksLeft } from "../store/selectors";

function Footer() {
  const tasksLeft = useSelector(selectTasksLeft);

  console.log("render");

  return <div>Tasks left: {tasksLeft}</div>;
}

export default Footer;
