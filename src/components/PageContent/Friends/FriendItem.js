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

export default class FriendItem extends Component {
	render() {
		return (
			<FriendItemContainer>
				<FriendItemPhoto
					style={{ backgroundImage: `url(${this.props.friendPhoto})` }}
				/>
				<FriendItemInfo>
					<FriendName>{this.props.name}</FriendName>
					<Link>Write message</Link>
				</FriendItemInfo>
			</FriendItemContainer>
		);
	}
}
