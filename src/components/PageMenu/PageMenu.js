import React, { Component } from 'react';
import { withBaseIcon }     from 'react-icons-kit';
import { home }             from 'react-icons-kit/fa/home';
import { listAlt }          from 'react-icons-kit/fa/listAlt';
import { paperPlane }       from 'react-icons-kit/fa/paperPlane';
import { user }             from 'react-icons-kit/fa/user';
import { users }            from 'react-icons-kit/fa/users';    
import { filePhotoO }       from 'react-icons-kit/fa/filePhotoO';  
import { music }            from 'react-icons-kit/fa/music';    
import { videoCamera }      from 'react-icons-kit/fa/videoCamera';  


import {
  ListContainer,
  PageMenuContainer,
  LinkTo,
  List
} from './PageMenuStyled';


const SideIconContainer =  withBaseIcon({ size: 16  , style: {
    color: '#4a76a8',
    cursor: 'pointer',
    width: '30px',
    height: '30px',
    opacity: '.7'
  }});

export default class PageMenu extends Component {
  render() {
    return (
      <PageMenuContainer>
           <ListContainer>
                <List><span><SideIconContainer icon={home}/></span><LinkTo href="">My profile</LinkTo></List>
                <List><span><SideIconContainer icon={listAlt}/></span><LinkTo href="">News</LinkTo></List>
                <List><span><SideIconContainer icon={paperPlane}/></span><LinkTo href="">Messages</LinkTo></List>
                <List><span><SideIconContainer icon={user}/></span><LinkTo href="">Friends</LinkTo></List>
                <List><span><SideIconContainer icon={users}/></span><LinkTo href="">Communities</LinkTo></List>
                <List><span><SideIconContainer icon={filePhotoO}/></span><LinkTo href="">Photos</LinkTo></List>
                <List><span><SideIconContainer icon={music}/></span><LinkTo href="">Music</LinkTo></List>
                <List><span><SideIconContainer icon={videoCamera}/></span><LinkTo href="">Videos</LinkTo></List>
           </ListContainer>
      </PageMenuContainer>
    )
  }
}
