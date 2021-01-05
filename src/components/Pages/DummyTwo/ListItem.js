import React from 'react';

const ListItem = (props) =>{

    return(
        <div className='item-container'>
          <div className='comment-header'>
            <h1>{props.name}</h1>
            <h3>Position</h3>
          </div>
          <div className='comment-body'>
            <p>{props.username}</p>
          </div>
          <div className='comment-button'>
            <button type='submit' value='Edit'>Edit</button>
          </div>
        </div>
    )
}

export default ListItem;