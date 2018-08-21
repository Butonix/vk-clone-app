import React, { Component }     from 'react';
import { GrayLink, BlockTitle } from './../HomeStyled';


import {
    HomePreindsContainer,
    MyFreinds
} from './HomeFriendsStyled';



export default class HomeFriends extends Component {
  render() {
    return (
      <HomePreindsContainer>
         <BlockTitle>
          <span>Мои друзья</span>
          <GrayLink href="#">Обновления</GrayLink>
          
        </BlockTitle>
        <MyFreinds>
            
        </MyFreinds>
      </HomePreindsContainer>
    )
  }
}
