import React, { Component } from 'react';
import ListItem from './ListItem';

const createComment = (row) => {
  return (
  <ListItem
  name={row.name}
  comment={row.username}
  />
  );
}

const Recom = () => {
  const data = JSON.parse(localStorage.getItem('recommendation') || '[]');
  return(  
    <ListItem
    { data.map(createComment) }
    />
    );
}

export default Recom;