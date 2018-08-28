import React, { Component } from 'react';
import { connect }  from 'react-redux';
// Styled Components

import {
    PostChangeContent,
    PostChangeLink
} from './HomeWallStyled';

// Actions 

import DeleteWallPost from './../../../../actions/DeleteWallPost';




export class PostChangeContentTemplate extends Component {
  
  handleCLick(e) {
    console.log(e);
    this.props.deletePost();
  }
  render() {
    return (
       <PostChangeContent
        show={this.props.show}
        onMouseOver={this.props.handleMouseOver}
        onMouseLeave={this.props.handleMouseLeave}
        >
        <PostChangeLink>Редактировать</PostChangeLink>
        <PostChangeLink onClick={this.props.deletePost}>Удалить</PostChangeLink>
        <PostChangeLink>Выключить комментарии</PostChangeLink>
      </PostChangeContent>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch, props) => ({
  deletePost: () => {
    dispatch(DeleteWallPost());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostChangeContentTemplate);
