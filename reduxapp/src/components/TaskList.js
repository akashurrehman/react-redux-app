import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, completeTask } from '../actions/taskActions';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, completeTask }) => {
    console.log(tasks);
    // Generate random English task names
    const generateTaskName = () => {
        const adjectives = ['Important', 'Urgent', 'Critical', 'Essential'];
        const nouns = ['Task', 'Assignment', 'Project', 'Objective'];
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        return `${adjective} ${noun}`;
      };
      
  
    return (
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onComplete={() => completeTask(task.id)}
            generateTaskName={generateTaskName} // Pass the generator function as a prop
          />
        ))}
      </ul>
    );
  };
  

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { deleteTask, completeTask })(TaskList);
