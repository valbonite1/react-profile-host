import React from 'react';
import HobbiesCard from './HobbiesCard';
import hobbiesData from './HobbiesData';
import './Hobbies.css';

const createHobby = (hobby) => {
  return (
  <HobbiesCard 
  id={hobby.id}
  key={hobby.id}
  icon={hobby.icon}
  text={hobby.text}
  />
  );
}

const Hobbies = () => {
  return(
    <>
      <div className='hobby-container'>
        <div className='hobby-header'>
          <h1>Hobbies</h1>
        </div>
        <div className='hobby-list'>
          {hobbiesData.map(createHobby)}
        </div>     
      </div>
    </>
  );
}

export default Hobbies;