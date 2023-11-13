
import React from 'react';
import TaskList from './Components/Tasklist';

import Navbar from './Components/Navbar';



const HomePage = () => {
  return (
    <div>
        <Navbar />
      <TaskList />
      <TaskForm />
      <Footer />
    </div>
  );
};

export default HomePage;
