import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import TaskList from './components/TaskList'; function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]); const toggleModal = () => {
    setModalOpen(!modalOpen);
  }; const addTask = (task) => {
    setTasks([...tasks, task]);
  }; return (
    <div className="App">
      <Navbar toggleModal={toggleModal} />
      {modalOpen && <Modal toggleModal={toggleModal} addTask={addTask} />}
      <TaskList tasks={tasks} />
    </div>
  );
} export default App;
