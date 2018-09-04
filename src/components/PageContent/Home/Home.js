import React, { Component } from 'react';

// React Components

import HomeProfile          from './HomeProfile/HomeProfile';
import HomeInfo             from './HomeInfo/HomeInfo';
import HomePhotos           from './HomePhotos/HomePhotos';
import HomeFriends          from './HomeFriends/HomeFriends';

import AddHomeWall          from './HomeWall/AddHomeWall';
import HomeWall             from './HomeWall/HomeWall';

import HomeGroups           from  './HomeGroups/HomeGroups';


// Styled components 

import { HomeContainer, 
        LeftColum, 
        RightColumn }       from './HomeStyled';


export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <LeftColum>

          <HomeProfile />
          <HomeFriends />
          <HomeGroups />

        </LeftColum>
        <RightColumn>

          <HomeInfo />
          <HomePhotos />
          <AddHomeWall  />
          <HomeWall />

        </RightColumn>
      </HomeContainer>
    )
  }
}
