import React from "react";


const TaskItem = ({ task, onDelete, onComplete, generateTaskName }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
      <button onClick={onDelete}>Delete</button>
      {!task.completed && <button onClick={onComplete}>Complete</button>}
      <br />
      <span>{generateTaskName()}</span> {/* Display the generated task name */}
    </li>
  );
};

export default TaskItem;
