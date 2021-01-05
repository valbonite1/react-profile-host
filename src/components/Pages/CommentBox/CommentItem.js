import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddModal from './AddModal';
import initialState from './InitialState';

const CommentItem = () => {


  useEffect(()=>{

    const data = localStorage.getItem('recommendations')
    
    if(data){
      setRecommendations(JSON.parse(data))
     }

    },[])

  const [recommendations, setRecommendations] = useState(initialState)
  
  const addRecom = (firstName, lastName, comment) => {
    setRecommendations([...recommendations, { id: uuidv4(), firstName, lastName, comment}])
  }

  const deleteRecom = (index) => {
    let newRecom = recommendations;
    newRecom.splice(index, 1);
    setRecommendations([...newRecom]);
  }

  useEffect(() => {
    let inputData = JSON.stringify(recommendations);
    localStorage.setItem('recommendations', inputData);
  }, [recommendations])

  return(
    <>
      <AddModal addRecom={addRecom}/>
      <ul className='comment-list'>
        {recommendations.map( (recom, index) => {
          return(
            <li key={recom.id}>
              <div className='comment-icon'>
                <i className='fas fa-user-circle'></i>
              </div>
              <div className='comment-content'>
                <div className='comment-name'>
                  <h2>{recom.firstName}</h2>
                  <h2>{recom.lastName}</h2>
                </div>
                <div className='comment-text'>
                  <p>{recom.comment}</p>
                </div>
                <div className='comment-btn'>
                  <button className='btn-edit'><i className='far fa-edit'></i></button>
                  <button onClick={() => deleteRecom(index)} className='btn-trash'><i className='far fa-trash-alt'></i></button>
                </div>
              </div>
            </li>)
        })}
      </ul>
    </>
  );
}

export default CommentItem;