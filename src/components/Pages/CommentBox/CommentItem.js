import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddModal from './AddModal';

const CommentItem = () => {

  const initialState = [
    { id: uuidv4(), firstName: 'Val', lastName: 'Bonite', comment: 'good job!' },
    { id: uuidv4(), firstName: 'Valentin', lastName: 'Bonite', comment: 'Awesome!' },
    { id: uuidv4(), firstName: 'Valerie', lastName: 'Bonite', comment: 'Great!' },
    { id: uuidv4(), firstName: 'Remedios', lastName: 'Bonite', comment: 'Cool stuff!' }
  ]

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

  const deleteRecom = (id) => {
    setRecommendations(recommendations.filter( recom => recom.id !== id));
  }

  useEffect(() => {
    let inputData = JSON.stringify(recommendations);
    localStorage.setItem('recommendations', inputData);
  }, [recommendations])

  return(
    <>
      <ul className='comment-list'>
        {recommendations.map( recom => {
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
                <div className='comment-delete'>
                  <button onClick={deleteRecom}>Delete</button>
                </div>
              </div>
            </li>)
        })}
      </ul>
      <AddModal addRecom={addRecom}/>
    </>
  );
}

export default CommentItem;