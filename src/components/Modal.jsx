import React, { useState } from 'react';const Modal = ({ toggleModal, addTask }) => {
    const [task, setTask] = useState('');  const handleSubmit = () => {
      if (task.trim()) {
        addTask(task);
        setTask('');
        toggleModal();
      }
    };  return (
      <div className="modal">
        <div className="modal-content">
          <h2>Add Task</h2>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleSubmit} className='btn2'>Add Task</button>
        </div>
      </div>
    );
  };export default Modal;