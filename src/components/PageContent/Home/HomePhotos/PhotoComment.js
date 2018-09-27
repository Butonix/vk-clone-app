import React, { Component } from 'react';
import { ProfileIcon } from './../../../StyledComponents';


import  { 
    PhotoCommentContainer,
    PhotoCommentRead,
    PhotoCommentProfileName,
    PhotoCommentReadText
} from './HomePhotosStyled';


export default class PhotoComment extends Component {
  render() {
    return (
      <PhotoCommentContainer>
        <ProfileIcon 
            size="34" 
        />

        <PhotoCommentRead>
            <PhotoCommentProfileName>{this.props.profileName}</PhotoCommentProfileName>
            <PhotoCommentReadText>{this.props.readText}</PhotoCommentReadText>
        </PhotoCommentRead>
      </PhotoCommentContainer>
    )
  }
}
