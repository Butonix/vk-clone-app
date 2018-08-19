import React, { Component } from 'react';
import { HomeContainer }    from './HomeStyled';
import Profile              from './Profile/Profile';
import ProfileInfo          from './ProfileInfo/ProfileInfo';


export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Profile />
        <ProfileInfo />
      </HomeContainer>
    )
  }
}
