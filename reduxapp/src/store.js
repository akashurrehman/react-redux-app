import { createStore } from 'redux';
import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from './actions/taskActions';


// Initial state
const initialState = {
    tasks: [
      { id: 1, text: 'Task 1', completed: false },
      { id: 2, text: 'Task 2', completed: true },
      { id: 3, text: 'Task 3', completed: false },
    ],
  };
  

// Reducer function


const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              completed: true,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};


// Create the Redux store
const store = createStore(tasksReducer);

export default store;
