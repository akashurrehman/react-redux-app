// Action types
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const Fetch_TASK = 'Fetch_TASK';


// Action creators
// actions/taskActions.js
export const fetchTask = () => (dispatch) => {
	const url = 'https://moviesdatabase.p.rapidapi.com/actors';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': 'f5d71df5eemshaeb335e568d0431p15570bjsn717097bc26d2',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
	  },
	};
  
	fetch(url, options)
	  .then((response) => response.json())
	  .then((data) => {
		// Assuming the API response returns an array of tasks
		dispatch({ type: Fetch_TASK, payload: data });
		console.log("Data from API",data);
	  })
	  .catch((error) => {
		// Handle the error if the API call fails
		console.error(error);
	  });
  };
  

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
