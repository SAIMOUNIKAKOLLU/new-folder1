import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput) {
      dispatch({
        type: 'ADD_TASK',
        payload: { id: Date.now(), name: taskInput }
      });
      setTaskInput('');
    }
  };

  const updateTask = (id) => {
    const newTaskName = prompt('Update task name:');
    if (newTaskName) {
      dispatch({
        type: 'UPDATE_TASK',
        payload: { id, name: newTaskName }
      });
    }
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };
  return (
    <div>
      <h2>Task List</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {state.tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => updateTask(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;