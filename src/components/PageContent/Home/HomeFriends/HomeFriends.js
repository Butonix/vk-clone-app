import React, { Component, Fragment } from 'react';
import { GrayLink, BlockTitle } from './../HomeStyled';
import { connect } from 'react-redux';

// React Compoenents

import Friend from './Friend';

// Styled Compoenents

import {
	HomeFriendsContainer,
	MyFriends,
	FriendsNumber,
	FriendsTitle,
} from './HomeFriendsStyled';

//Actions

import fetchFriends from './../../../../actions/Friends/FetchFriends';

export class HomeFriends extends Component {
	componentDidMount() {
		this.props.dataFriends();
	}
	render() {
		const friends = this.props.freinds;
		return (
			<Fragment>
				<HomeFriendsContainer>
					<BlockTitle>
						<FriendsTitle>
							Friends <FriendsNumber>3328</FriendsNumber>
						</FriendsTitle>
						<GrayLink href="#">updates </GrayLink>
					</BlockTitle>
					<MyFriends>
						{friends
							? friends.slice(0, 6).map((item, index) => {
									return (
										<Friend
											key={index}
											name={item.name.first}
											freindPhoto={item.picture.medium}
										/>
									);
							  })
							: ''}
					</MyFriends>
				</HomeFriendsContainer>
				<HomeFriendsContainer>
					<BlockTitle>
						<FriendsTitle>
							Friends Online <FriendsNumber>1236</FriendsNumber>
						</FriendsTitle>
					</BlockTitle>
					<MyFriends>
						{friends
							? friends
									.slice(0, 6)
									.reverse()
									.map((item, index) => {
										return (
											<Friend
												key={index}
												name={item.name.first}
												freindPhoto={item.picture.medium}
											/>
										);
									})
							: ''}
					</MyFriends>
				</HomeFriendsContainer>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	freinds: state.Friends.data,
});

const mapDispatchToProps = dispatch => ({
	dataFriends: () => {
		dispatch(fetchFriends());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeFriends);
