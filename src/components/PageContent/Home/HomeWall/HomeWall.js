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

import { arrows_down } from 'react-icons-kit/linea/arrows_down'
import { heart }        from 'react-icons-kit/fa/heart';
import { comment}       from 'react-icons-kit/fa/comment';
import { share }        from 'react-icons-kit/fa/share';
import { withBaseIcon } from 'react-icons-kit';

// React compoents

import PostChangeContentTemplate from './PostChangeContent';
import NoResultsSearch           from './NoResultsSearch';



const SideIconContainer =  withBaseIcon({ size: 18  , style: {
  color: '#4a76a8',
  cursor: 'pointer',
  width: '30px',
  height: '30px',
  opacity: '.8 '
}});


export class HomeWall extends Component {
  
  render() {
    return (
      <WallContainer>
        {!this.props.vall.length ? (<NoResultsSearch />) : ''}
        {
          this.props.vall.map((item, index) => {
            return (
              <Post key={index}>
                  <PostTitle>
                    <PostProfile>
                      <WallProfile back="./images/profile.jpg"/>
                      <span>Иван Звонков</span>
                    </PostProfile>
                    <PostChange>
                      <SideIconContainer 
                        icon={arrows_down}
                      />
                      <PostChangeContentTemplate 
                        
                      />
                    </PostChange>
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
