import React, { Component } from 'react'
import { connect } from 'react-redux'


// Styled Components

import {
    WallContainer,
    WallProfile,
    Post,
    PostTitle,
    PostContent,
    PostSettings,
    PostChange,
    PostProfile,

} from './HomeWallStyled';




// Icons 

import { heart }        from 'react-icons-kit/fa/heart';
import { comment}       from 'react-icons-kit/fa/comment';
import { share }        from 'react-icons-kit/fa/share';
import { withBaseIcon } from 'react-icons-kit';

// React compoents

import NoResultsSearch     from './NoResultsSearch';
import PostChangeTemplate  from './PostChange'; 



const SideIconContainer =  withBaseIcon({ size: 18  , style: {
  color: '#4a76a8',
  cursor: 'pointer',
  width: '30px',
  height: '30px',
  opacity: '.8 '
}});


export class HomeWall extends Component {
  deletePost(id) {
    console.log(id)
  }
  render() {
    return (
      <WallContainer>
        {!this.props.vall.length ? (<NoResultsSearch />) : ''}
        {
          this.props.vall.map((item, index) => {
            return (
              <Post key={index} deletPost={this.deletePost(item.id)}>
                  <PostTitle>
                    <PostProfile>
                      <WallProfile back="./images/profile.jpg"/>
                      <span>Иван Звонков</span>
                    </PostProfile>
                    <PostChangeTemplate />
                  </PostTitle>
                  <PostContent>
                    <p>{item.text}</p> 
                  </PostContent>
                  <PostSettings>
                      <SideIconContainer icon={heart}/>
                      <SideIconContainer icon={comment}/>
                      <SideIconContainer icon={share}/>
                  </PostSettings>
              </Post>
            )
          }) 
        }
      </WallContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  vall: state.WallAddPost.posts.filter(item => item.text.includes(state.WallAddPost.searchText))
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeWall);
