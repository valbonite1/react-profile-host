/* Ito yung component kung saan ka maglalagay ng inputs mo. Like name and the comment itself.  */

import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root') //need mo to ilagay dahil magkakaerror ka sa browser. di ko alam bakit basta lagay mo lang to HAHHAA

const AddModal = ( { addRecom } ) => { //makikita mo tong function na to from the CommentItem.js. Pinassdown lang natin siya dito. ginamit ko siya sa handleSubmit function.

    /* ========================HANDLES FORM INPUT AND FORM SUBMIT======================== */

  // ito yung iinitialize mo bawat input as an empty string. if you look at the code kung saan yung inputs may makikita kang value={fistName}, value={lastName}, value={comment} etc. Ito yun. 

const [firstName, setFirstName] = useState(''); //for firstName input
const [lastName, setLastName] = useState(''); //for lastName input
const [comment, setComment] = useState(''); // for comment input

// so you can basically edit what inputs you want to get. kung gusto mo, isang input nalang si firstName and lastName kaya gawin mongfullName. ganern. di ko rin alam bat hiniwalay ko pa HAHAHAHAH. idudugtong ko pa rin naman paglabas ng data 

// the handleSubmit function below handles the submit(Write yung name ng button). nakatag siya sa submit button. so everytime the submit button is clicked, this function will get triggered.  

const handleSubmit = (e) => {
  e.preventDefault(); //this prevents the page from reload. default action ni submit button is to reload the page. this prevents it.
  setFirstName(''); //everytime you submit, maeempty yung input fields ulit. kapag hindi mo to ginawa, maiiwan yung text na nilagay ni user
  setLastName('');//everytime you submit, maeempty yung input fields ulit. kapag hindi mo to ginawa, maiiwan yung text na nilagay ni user
  setComment(''); //everytime you submit, maeempty yung input fields ulit. kapag hindi mo to ginawa, maiiwan yung text na nilagay ni user
  addRecom(firstName, lastName, comment); //ito yung pinassdown na function na galing sa parent component niya (CommentItem.js)

  setModalOpen(false); //this will close the modal everytime you submit. Further explanation is down below.
}
  

  /* ========================HANDLES MODAL FUNCTION======================== */

  // What is a modal? Modal yun yung kapag may priness kang button may lalabas na parang body 

  // Ito yung set of functions na maghahandle sa pag open-close ng modal natin 

  const [modalOpen, setModalOpen] = useState(false); //We initialize the state of the modal which is false. meaning kapag false. nakaclose siya

  // handleModalOpen will open the modal. nakalink to siya sa button na may fas fa-pen na name 

  const handleModalOpen = () => {
    setModalOpen(!false);
  }

  // this will just close the modal. nilink ko to siya sa Cancel button. 

  const handleModalClose = () => {
    setModalOpen(false);
  }

  // style lang to ng kulay ng backgorund color sa likod ng modal. so parang magffade yung likod and magddark and magkakaroon ng focus sa modal mismo 

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(51, 51, 51, 0.8)'
    },

  }

  /* ================================================ */

  /* ***********PLEASE REFER TO MY COMMENTS FOR THE JSX HERE PANGIT MAGCOMMENT SA LOOB NG JSX MAGKAROON NG CURLY BRACES ****************** */

  // mapapansin mo sa input fields yung (<input>) may makikita kang onChange functions. yan yung maghahandle ng change everytime may nilalagay na input data. When i say input data. It is just the information or data na tinatype ng user sa comment. Everytime may tinatype, kinukuha natin yung value. So if you were to console log the event, ilolog niya yung letters na tinatype ni user.

  // Doon sa <Modal> tag. Yan yung modal library. may makikita kang onRequestClose function. Yung ginagawa niya pwede mo iclose yung modal just by clicking outside the modal. So parang click ka lang anywhere magcclose siya. Hindi need pindutin yung Cancel button. Diyan ko rin pinasok yung style={modalStyle} na dineclare ko sa taas.

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