import React,{useState} from 'react';
import { connect } from 'react-redux';
import { deleteTask, completeTask,addTask,updateTask } from '../actions/taskActions';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, completeTask,addTask,updateTask}) => {

  const [newTaskText, setNewTaskText] = useState('');

    
    console.log("Tasks:",tasks);
    console.log("Update Task:",updateTask);
    
    // Generate random English task names
    const generateTaskName = () => {
        const adjectives = ['Important', 'Urgent', 'Critical', 'Essential'];
        const nouns = ['Task', 'Assignment', 'Project', 'Objective'];
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        return `${adjective} ${noun}`;
      };
    
    const handleAddTask = () => {
      if (newTaskText.trim() !== '') {
        const newTask = {
          id: tasks.length + 1,
          text: newTaskText,
          completed: false,
        };
        addTask(newTask);
        setNewTaskText('');
      }
    };
    
    return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onComplete={() => completeTask(task.id)}
            onUpdate={(updatedText) => updateTask(task.id, updatedText)}
            generateTaskName={generateTaskName} // Pass the generator function as a prop
          />
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
    
    );
  };
  

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { deleteTask, completeTask,addTask,updateTask })(TaskList);
