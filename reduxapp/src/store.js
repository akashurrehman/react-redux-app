import { createStore,applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { ADD_TASK, DELETE_TASK, COMPLETE_TASK,UPDATE_TASK,Fetch_TASK } from './actions/taskActions';




const initialState = {
  tasks: {
    results: [], // tasks should be initialized with an empty array for results
  },
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

    case Fetch_TASK:
    return {
      ...state,
      tasks: action.payload,
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
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              text:action.payload.text,
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
const store = createStore(tasksReducer,applyMiddleware(thunk));

export default store;
