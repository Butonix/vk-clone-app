import React, { Component } from 'react';

// React Components

import Link from './../../UI/Link';

// Styled Components

import {
	FriendItemContainer,
	FriendItemPhoto,
	FriendItemInfo,
	FriendName,
} from './FriendsStyled';

export const Friend = ({ ...props }) => (
	<FriendItemContainer>
		<FriendItemPhoto
			style={{ backgroundImage: `url(${props.friendPhoto})` }}
		/>
		<FriendItemInfo>
			<FriendName>{props.name}</FriendName>
			<Link>Write message		<b>	{props.age}</b></Link>
		</FriendItemInfo>
	</FriendItemContainer>
)

export default Friend;


