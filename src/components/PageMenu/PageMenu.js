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


const SideIconContainer =  withBaseIcon({ size: 17  , style: {
    color: '#4a76a8',
    cursor: 'pointer',
    width: '30px',
    height: '30px'
  }});

export default class PageMenu extends Component {
  render() {
    return (
      <PageMenuContainer>
           <ListContainer>
                <List><span><SideIconContainer icon={home}/></span><LinkTo href="">Моя страница</LinkTo></List>
                <List><span><SideIconContainer icon={listAlt}/></span><LinkTo href="">Новости</LinkTo></List>
                <List><span><SideIconContainer icon={paperPlane}/></span><LinkTo href="">Сообщения</LinkTo></List>
                <List><span><SideIconContainer icon={user}/></span><LinkTo href="">Друзья</LinkTo></List>
                <List><span><SideIconContainer icon={users}/></span><LinkTo href="">Группы</LinkTo></List>
                <List><span><SideIconContainer icon={filePhotoO}/></span><LinkTo href="">Фотографии</LinkTo></List>
                <List><span><SideIconContainer icon={music}/></span><LinkTo href="">Музыка</LinkTo></List>
                <List><span><SideIconContainer icon={videoCamera}/></span><LinkTo href="">Видео</LinkTo></List>
           </ListContainer>
      </PageMenuContainer>
    )
  }
}
