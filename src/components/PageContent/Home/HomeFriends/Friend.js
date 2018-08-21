import React from 'react';

import { FreindItem } from './HomeFriendsStyled';



const Friend = (props) => {
  return (
    <FreindItem>
      <img src={props.imgUrl} />
    </FreindItem>
  );
}

export default Freind;
