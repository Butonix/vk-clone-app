import React, { Component } from 'react';
import styled               from 'styled-components';



// Styled Components
import {
  PhotosContainer,
  PhotosTitle,
  MapLink,
  MyPhots
}  from './HomePhotosStyled';

// React Custom Components

import Photo from './Photo';


export default class ProfilesPhotos extends Component {
  render() {
    return (
      <PhotosContainer>
        <PhotosTitle>
          <span>Мои фотографии</span>
          <MapLink href="#">Показать на карте</MapLink>
        </PhotosTitle>
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
