import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const AddModal = ( { addRecom } ) => {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [comment, setComment] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  setFirstName('');
  setLastName('');
  setComment('');
  addRecom(firstName, lastName, comment);

  setModalOpen(false);
}
  

  /* ========================HANDLE MODAL FUNCTION======================== */

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!false);
  }

  const handleModalClose = () => {
    setModalOpen(false);
  }

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(51, 51, 51, 0.8)'
    },

  }

  /* ========================HANDLE MODAL FUNCTION======================== */

  return(
    <>
      <div className='comment-header'>
        <div className='comment-header-text'>
          <h2>Write a Recommendation</h2>
        </div>
        <div className='comment-header-btn'>
          <button onClick={handleModalOpen} className='btn-modal-trigger'><i className='fas fa-pen'></i></button>
        </div>
      </div>
      <div className='modal-container'>
        <Modal isOpen={modalOpen} onRequestClose={handleModalClose} className='modal-body' style={modalStyle}>
          <div className='modal-header'>
            <h2>Let Val know your thoughts!</h2>
            <p>Leave your comment here.</p>
          </div>
          <div className='form-container' autoComplete='off'>
              <div className='input-container'>
                <label>First Name</label>
                <input type='text' required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div className='input-container'>
                <label>Last Name</label>
                <input type='text' required value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div className='input-container'>
                <label>Recommendation</label>
                <textarea name='Comment' rows='10' cols='40' required value={comment} onChange={(e) => setComment(e.target.value)} />
              </div>
          </div>
          <div className='modal-btn'>
            <button className='btn-write' onClick={handleSubmit}>Write</button>
            <button className='btn-cancel' onClick={handleModalClose}>Cancel</button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default AddModal;