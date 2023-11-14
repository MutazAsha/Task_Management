import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../redux/Taskslice';
import TaskItem from './Taskitem';
import TaskFilter from './Tasklistfillter';
import { tasksApi } from '../Api';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await tasksApi.getAllTasks();
        dispatch(setTasks(response.data));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-3xl text-gray-800 first-letter: mb-6 text-center">Task List</h1>
        <TaskFilter />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
