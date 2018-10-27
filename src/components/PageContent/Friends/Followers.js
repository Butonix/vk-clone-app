import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styled Components

import {
	FollowersContainer,
	FollowersTop,
	FollowersCount,
	Follower,
	FollowerPhoto,
	FollowerInfo,
	FollowerName,
} from './FriendsStyled';

import { HeadH3 } from './../../UI/Typography';
import { Button, TransparentButton } from './../../UI/Button';

// Actions

import fetchFriends from './../../../actions/Friends/FetchFriends';

// Functions

import parseName from './ParseName';

const random = Math.floor(Math.random() * 6);

class Followers extends Component {
	componentDidMount() {
		this.props.dataFriends();
	}
	render() {
		if (this.props.friends) {
			const friend = this.props.friends[random];
			var name = parseName(friend.name.first, friend.name.last);
		}
		return (
			<FollowersContainer>
				<FollowersTop>
					<HeadH3>Followers</HeadH3>
					<FollowersCount>13</FollowersCount>
				</FollowersTop>
				{this.props.friends ? (
					<Follower>
						<FollowerPhoto
							style={{
								backgroundImage: `url(${
									this.props.friends[random].picture.large
								})`,
							}}
						/>
						<FollowerInfo>
							<FollowerName>{name}</FollowerName>
							<Button>Add to friends</Button>
							<TransparentButton>Keep as follower</TransparentButton>
						</FollowerInfo>
					</Follower>
				) : (
					''
				)}
			</FollowersContainer>
		);
	}
}

const mapStateToProps = state => ({
	friends: state.Friends.data,
});

const mapDispatchToProps = dispatch => ({
	dataFriends: () => {
		dispatch(fetchFriends());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Followers);
