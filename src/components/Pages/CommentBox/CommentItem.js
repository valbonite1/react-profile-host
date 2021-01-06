/* ITO YUNG COMPONENT WHERE WE WILL RENDER THE DATA THAT WE GET FROM THE AddModal.js Component */

import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; //this is another library. please install this. explanation in NotesForJatt.
import AddModal from './AddModal';
import initialState from './InitialState'; //nilabas ko sa ibang file yung data para hindi magulo sa loob ng code. This file is not a component, it just contains data. This is the initial data that you can provide. Gusto ko kasi parang may laman na na fake comments. HAHAHAHA yun yung screenshot na sinend ko sayo. You don't have to do this if you dont want to. You can simply start with an empty array and add comments from there.

const CommentItem = () => {

  //this is the useEffect that will get our initial data. 

  useEffect(()=>{

    const data = localStorage.getItem('recommendations')
    
    if(data){ //the if condition will ask if data exists, if it exists, then it will parse it.
      setRecommendations(JSON.parse(data))
     }

    },[]) //this dependancy will just run everytime the page reloads. so once lang siya ever magrrun. 

  const [recommendations, setRecommendations] = useState(initialState) //dito mo iinitialize ang initial data. So kumbaga, recommendations will have an initial data na nasa loob ng initialState. You can start with an empty array. So you just start with useState([]);
  
  //the addRecom function yung responsible ng pag-add ng new data. 
  const addRecom = (firstName, lastName, comment) => {

    //yung nangyayari dito is spread operator. kukunin niya yung current existing data isspread operator niya as ...recommendations, then iaadd niya yung new data which is the {id, firstName, lastName, comment}. Ito yung ginagawa mo if you want to add new data to an array. Kapag hindi mo kasi ginawa yung spread operator na ...recommendations, it will just replace the old data with the new data. so yung ginagawa dito is iccopy niya yung old data through ...recommendations, then dugtong yung new data.

    setRecommendations([...recommendations, { id: uuidv4(), firstName, lastName, comment}])
  }

  //ito yung delete function. dinedelete niya yung entry na pipiliin mo.

  const deleteRecom = (index) => {
    let newRecom = recommendations;
    newRecom.splice(index, 1);
    setRecommendations([...newRecom]);
  }

  //ito yung useEffect na magsset ng data sa localStorage. so everytime something changes sa recommendations data mo (as seen in the dependency), it will run and set the new change sa localStorage. 

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