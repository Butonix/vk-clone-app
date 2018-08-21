import React, { Component } from 'react';
import styled               from 'styled-components';



// Styled Components
import {
  PhotosContainer,
  MyPhots
}  from './HomePhotosStyled';

import { GrayLink, BlockTitle } from './../HomeStyled';

// React Custom Components

import Photo from './Photo';


export default class ProfilesPhotos extends Component {
  render() {
    return (
      <PhotosContainer>
        <BlockTitle>
          <span>Мои фотографии</span>
          <GrayLink href="#">Показать на карте</GrayLink>
        </BlockTitle>
        <MyPhots>
          <Photo imgUrl="/images/1.jpg"/>
          <Photo imgUrl="/images/2.jpg"/>
          <Photo imgUrl="/images/3.jpg"/>
          <Photo imgUrl="/images/4.jpg"/>
        </MyPhots>
      </PhotosContainer>
    )
  }
}
