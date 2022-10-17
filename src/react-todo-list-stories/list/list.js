import PropTypes from "prop-types";
import cn from "classnames";

import classes from "./list.module.scss";

function List({ data, isLoading, onToggle, onRemove }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.map(({ id, text, completed }) => (
        <li key={id}>
          <span
            className={cn({ [classes.completed]: completed })}
            onClick={() => onToggle(id)}
          >
            {text}
          </span>
          <button onClick={() => onRemove(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
  onRemove: PropTypes.func,
};

List.defaultProps = {
  data: [],
  isLoading: false,
  onToggle: () => {},
  onRemove: () => {},
};

export default List;
