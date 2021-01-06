/* Ito yung Pinakamama na component. Tagahawak lang ng mga bata niya. Sabi ni sir iangat ko raw mga state pero di ko alam pano kaya ganito nalang HAHAHAHHAHAA
You can rename the components with anything you want.  */

import React from 'react';
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



