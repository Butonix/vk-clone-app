import React, { Component } from 'react';

// Styled Components
import {
    PostContainer,
    PostAuthorImage,
    PostAuthor,
    PostTop,
    PostDate,
    PostImage,
    PostDescription,
    PostTitle,
    AuthorLink,
    PostHeader,
    PostText

} from './PostStyled';

export default class Post extends Component {
  render() {
    return (
      <PostContainer>
        <PostTop>
            <PostAuthorImage />
            <PostHeader>
                <PostAuthor>{this.props.author}</PostAuthor>
                <PostDate>Today in 14:33</PostDate>
            </PostHeader>
        </PostTop>
        <PostText>{this.props.postText}</PostText>
        <PostImage
          style={{
            backgroundImage: `url(${this.props.postImage})`
          }}
        />
        <PostDescription>
            <PostTitle>{this.props.title}</PostTitle>
            {/* <AuthorLink>Meduza.io</AuthorLink> */}
        </PostDescription>
      </PostContainer>
    )
  }
}
