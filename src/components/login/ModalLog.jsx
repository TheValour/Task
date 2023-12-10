import React, { useState } from 'react';
import Modal from 'react-modal';
import Login from './Login';

const ExampleApp = () => {

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
    <div >
      <button onClick={handleOpenModal}>Trigger Modal</button>
      <Modal
        isOpen={showModal}
        style={customStyles}
      >
      <button onClick={handleCloseModal} >Close Modal</button>
        <Login/>
      </Modal>
    </div>
  );
};

export default ExampleApp;
