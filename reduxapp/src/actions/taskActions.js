// Action types
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

// Action creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const completeTask = (taskId) => ({
  type: COMPLETE_TASK,
  payload: taskId,
});

export const updateTask = (taskId, updatedText) => ({
  type: UPDATE_TASK,
  payload: { id: taskId, text: updatedText },
});

// Example usage of the updateTask action
const taskId = 1; // ID of the task to be updated
const updatedText = 'Updated task text'; // The desired updated text
updateTask(taskId, updatedText);
