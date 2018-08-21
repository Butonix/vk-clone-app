import React, { Component } from 'react';


import HomeProfile          from './HomeProfile/HomeProfile';
import HomeInfo             from './HomeInfo/HomeInfo';
import HomePhotos           from './HomePhotos/HomePhotos';
import HomeFriends          from './HomeFriends/HomeFriends';

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

        </RightColumn>
      </HomeContainer>
    )
  }
}
