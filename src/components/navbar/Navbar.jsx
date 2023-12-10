import React, { useState } from 'react';
import Modal from 'react-modal';

import {Register, Login} from '../';
import './Navbar.css';
import { useSharedState } from '../context/UserContext';  // context

function Navbar() {
  const { currPage} = useSharedState();

  const [showModal, setShowModal] = useState(false);
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgb(16 16 16 / 80%)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div href="/" className="navbar-container my-4">
      <span className='Romi'><img src="./img/logo.png" alt="ATG. WORLD" /></span>

      <input type="text" name="" id="" className='bg-gray-200 w-3/12 rounded-xl placeholder:text-xs ' placeholder=' Search for your favorite groups in ATG'/>

      <div>Create account. <span className='text-blue-700' id='its-free' onClick={handleOpenModal}>It's  free</span></div>

      <Modal
        isOpen={showModal}
        style={customStyles}
      >
        <button onClick={handleCloseModal} className='bg-red-200 p-1 rounded-md text-sm'>Close</button>
        {currPage ? <Login/> : <Register/>}
      </Modal>

    </div>
  )
}

export default Navbar;
