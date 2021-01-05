import React, { useState } from 'react';
import CommentItem from './CommentItem';
import './CommentBox.css';

const CommentBox = () => {
  
  return(
    <>
      <div className='comment-section'>
        <CommentItem />
      </div>
    </>
  )
}

export default CommentBox;  