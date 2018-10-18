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
    PostHeader

} from './PostStyled';

export default class Post extends Component {
  render() {
    return (
      <PostContainer>
        <PostTop>
            <PostAuthorImage />
            <PostHeader>
                <PostAuthor>  Meduza   </PostAuthor>
                <PostDate>Today in 14:33</PostDate>
            </PostHeader>
        </PostTop>        
        <PostImage />
        <PostDescription>
            <PostTitle>Глава Крыма 22 октября распределит обязанности арестованного вице-премьера</PostTitle>
            <AuthorLink>Meduza.io</AuthorLink>
        </PostDescription>
      </PostContainer>
    )
  }
}
