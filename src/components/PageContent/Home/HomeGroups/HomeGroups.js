import React, { Component }     from 'react';



// Styled Compoenents

import { GrayLink, BlockTitle } from './../HomeStyled';
import { 
  HomeGroupsContainer,
  GroupsTitle,
  GroupsNumber
} from './HomeGroupsStyled';

// React Compoenents

import GroupItem from './GroupItem';

export default class HomeGroups extends Component {
  render() {
    return (
      <HomeGroupsContainer>
        <BlockTitle>
          <GroupsTitle>Noteworthy pages <GroupsNumber>31</GroupsNumber></GroupsTitle>
        </BlockTitle>
        <GroupItem 
          name="Лентач"
          description="Пропaганда здравого смысла"
        />
        <GroupItem 
          name="Стартапы и бизнес"
          description="Делай дело."
        />
        <GroupItem 
          name="Медуза"
          description="Mass media"
        />
        <GroupItem 
          name="Лентач"
          description="Пропaганда здравого смысла"
        />
       
      </HomeGroupsContainer>
    )
  }
}
