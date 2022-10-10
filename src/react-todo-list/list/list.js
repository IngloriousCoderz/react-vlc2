import cn from "classnames";
import PropTypes from "prop-types";

import classes from "./list.module.scss";

function List({ tasks, onToggle, onRemove }) {
  const handleToggle = (id) => (event) => onToggle(id);
  const handleRemove = (id) => (event) => onRemove(id);

  return (
    <ul>
      {tasks.map(({ id, text, completed }) => (
        <li key={id}>
          <span
            className={cn({ [classes.completed]: completed })}
            onClick={handleToggle(id)}
          >
            {text}
          </span>
          <button onClick={handleRemove(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

List.defaultProps = {
  tasks: [],
  onToggle: () => {},
  onRemove: () => {},
};

export default List;
