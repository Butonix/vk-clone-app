import React, { Component,Fragment  }     from 'react';
import { GrayLink, BlockTitle } from './../HomeStyled';

import Friend from './Friend';

import {
    HomePreindsContainer,
    MyFreinds,
    FreindsNumber,
    FreindsTitle
} from './HomeFriendsStyled';



export default class HomeFriends extends Component {
  render() {
    return (
    <Fragment>
      <HomePreindsContainer>
         <BlockTitle>
          <FreindsTitle>Мои друзья <FreindsNumber>3328</FreindsNumber></FreindsTitle>
          <GrayLink href="#">Обновления</GrayLink>
          
        </BlockTitle>
        <MyFreinds>
            <Friend name="Анастасия"/>  
            <Friend name="Иван"/>  
            <Friend name="Света"/>  
            <Friend name="Андрей"/>  
            <Friend name="Дима"/>  
            <Friend name="Катя"/>
        </MyFreinds>
      </HomePreindsContainer>
       <HomePreindsContainer>
        <BlockTitle>
          <FreindsTitle>Друзья Онлайн <FreindsNumber>1236</FreindsNumber></FreindsTitle>
          </BlockTitle>
        <MyFreinds>
            <Friend name="Анастасия"/>  
            <Friend name="Иван"/>  
            <Friend name="Света"/>  
            <Friend name="Андрей"/>  
            <Friend name="Дима"/>  
            <Friend name="Катя"/>
        </MyFreinds>
    </HomePreindsContainer>
  </Fragment>
    );
  }
}
