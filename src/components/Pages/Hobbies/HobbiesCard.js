import React from 'react';
import './HobbiesCard.css';

const HobbiesCard = (props) => {
  return(
    <>
      <div className='icon-container'>
        <div className='hobby-icons'>
          <i className={props.icon}></i>
        </div>
        <p>{props.text}</p>
      </div>
    </>
  );
}


export default HobbiesCard;