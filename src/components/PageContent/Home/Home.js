import React, { Component } from 'react';
import styled               from 'styled-components';
import { HomeContainer }    from './HomeStyledComponents';

import HomeProfile          from './HomeProfile/HomeProfile';


export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <HomeProfile />
      </HomeContainer>
    )
  }
}
