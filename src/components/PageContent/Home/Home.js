import React, { Component } from 'react';
import Profile              from './Profile/Profile';
import ProfileInfo          from './ProfileInfo/ProfileInfo';
import ProfilePhotos        from './ProfilePhotos/ProfilesPhotos';

// Styled components 
import { HomeContainer, 
        LeftColum, 
        RightColumn }       from './HomeStyled';


export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <LeftColum>

          <Profile />

        </LeftColum>
        <RightColumn>

          <ProfileInfo />
          <ProfilePhotos />

        </RightColumn>
      </HomeContainer>
    )
  }
}
