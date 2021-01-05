import React, { useState } from 'react';
import CommentItem from './CommentItem';
import './CommentBox.css';

const CommentBox = () => {
  
  return(
    <>
      <div className='comment-section'>
        <div className='comment-header'>
          <h2>Write a Recommendation</h2>
        </div>
        <CommentItem />
      </div>
    </>
  )
}

export default CommentBox;  