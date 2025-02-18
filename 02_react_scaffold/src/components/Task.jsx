import PropTypes from "prop-types";
const Task = ({ name, completed }) => {
  return (
    <div>
      <span style={{ color: completed ? "green" : "red" }}>{name}</span>
    </div>
  );
};
Task.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
export default Task;
