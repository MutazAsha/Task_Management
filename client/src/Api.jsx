import axios from 'axios';

const Apis= 'api'

const api = axios.create({
  baseURL: Apis,
});
const endpoints = {
  tasks: '/tasks', 
};


const tasksApi = {
  getAllTasks: () => axios.get('http://localhost:5000/tasks'),
  addTask: (task) => axios.post('http://localhost:5000/tasks', task),
  updateTask: (taskId, updatedTask) => axios.put(`${'http://localhost:5000/tasks'.tasks}/${taskId}`, updatedTask),
  deleteTask: (taskId) => axios.delete(`${'http://localhost:5000/tasks'.tasks}/${taskId}`),
};

export { tasksApi };
