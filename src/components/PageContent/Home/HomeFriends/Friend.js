import React from 'react';

import { FreindItem } from './HomeFriendsStyled';



const Friend = (props) => {
  return (
    <FreindItem>
      <div className="avatar"/>
      <p>{props.name}</p>
    </FreindItem>
  );
}

export default Friend;
