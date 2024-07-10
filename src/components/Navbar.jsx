import React from 'react';const Navbar = ({ toggleModal }) => {
    return (
      <nav className="navbar">
        <div className="logo">TaskApp</div>
        <button onClick={toggleModal} className='btn'>Open</button>
      </nav>
    );
  };export default Navbar;
