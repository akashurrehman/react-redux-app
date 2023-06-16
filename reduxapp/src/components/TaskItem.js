import React from "react";


const TaskItem = ({ task, onDelete, onComplete, generateTaskName,onUpdate }) => {
  console.log("Task Update",task.id)

  const handleUpdate = () => {
    const updatedText = generateTaskName(); // Replace this with the updated text from user input or any other source
    onUpdate(updatedText); // Pass the updated text to the onUpdate callback
  };

  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
      <button onClick={onDelete}>Delete</button>
      {!task.completed && <button onClick={onComplete}>Complete</button>}
      <button onClick={handleUpdate}>Update</button>
      <br />
      <span>{generateTaskName()}</span> {/* Display the generated task name */}
    </li>
  );
};

export default TaskItem;
