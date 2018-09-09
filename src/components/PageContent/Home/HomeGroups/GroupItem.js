import React from 'react';
import {
    GroupItemContainer,
    ItemImage,
    ItemInfo,
    ItemInfoTitle,
    ItemInfoDescription
} from './HomeGroupsStyled';

const GroupItem = (props) => {
  return (
    <GroupItemContainer>
      <ItemImage />
      <ItemInfo>
          <ItemInfoTitle>{props.name}</ItemInfoTitle>
          <ItemInfoDescription>{props.description}</ItemInfoDescription>
      </ItemInfo>
      
    </GroupItemContainer>
  )
}

export default GroupItem
