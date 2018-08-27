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
  constructor(props) {
    super(props);
    this.state = {
       postChangeShow: false
    }
  }
  handleCLick(e) {
    console.log(e);
    this.props.deletePost();
  }
  handleMouseOver(e) {
    this.setState({
       postChangeShow: true
    })
  }
  handleMouseLeave(e) {
    this.setState({
       postChangeShow: false
    });
  }
  render() {
    return (
       <PostChangeContent
        show={this.state.postChangeShow}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        >
        <PostChangeLink>Редактировать</PostChangeLink>
        <PostChangeLink onClick={this.handleCLick.bind(this)}>Удалить</PostChangeLink>
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
