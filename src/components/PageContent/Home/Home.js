import React, { Component } from 'react';

// React Components

import HomeProfile          from './HomeProfile/HomeProfile';
import HomeInfo             from './HomeInfo/HomeInfo';
import HomePhotos           from './HomePhotos/HomePhotos';
import HomeFriends          from './HomeFriends/HomeFriends';

import AddHomeWall          from './HomeWall/AddHomeWall';
import SearchWall           from './HomeWall/SearchWall';
import HomeWall             from './HomeWall/HomeWall';


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

        </LeftColum>
        <RightColumn>

          <HomeInfo />
          <HomePhotos />
          <AddHomeWall  />
          <SearchWall />
          <HomeWall />

        </RightColumn>
      </HomeContainer>
    )
  }
}
