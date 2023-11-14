import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/Taskslice';
import { tasksApi } from '../Api';
import { FiPlus } from 'react-icons/fi';

import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      dueDate,
      priority,
      completed: false,
    };

    try {
      const response = await tasksApi.addTask(newTask);
      dispatch(addTask(response.data));
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('low');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-gray-600 p-6 rounded-md shadow-md"
    >
      <h2 className="text-2xl text-white mb-6 text-center">Add Task</h2>
      <label className="block text-white mb-4">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-md text-black"
        />
      </label>
      <label className="block text-white mb-4">
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-md text-black"
        />
      </label>
      <label className="block text-white mb-4">
        Due Date:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-md text-black"
        />
      </label>
      <label className="block text-white mb-4">
        Priority:
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-md text-black"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-300 transition flex justify-center  "
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
