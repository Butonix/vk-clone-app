import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

// Styled Components

import { FriendsContainer } from './FriendsStyled';

// React Components

import Followers from './Followers';
import SwitchFriends from './SwitchFriends';
import FriendsSearch from './FriendsSearch';
import FriendItem from './FriendItem';
import ContentLoad from './../../ContentLoad/ContentLoad';
import SearchNotFound from './../../SearchNotFound/SearchNotFound';

// Actions

import fetchFriends from './../../../actions/Friends/FetchFriends';

//  Functions

import parseName from './ParseName';

class Friends extends PureComponent {
	componentDidMount() {
		this.props.dataFriends();
	}
	render() {
		return (
			<Fragment>
				{this.props.friendsLoad ? <ContentLoad /> : ''}
				<FriendsContainer
					style={{ display: `${this.props.friendsLoad ? 'none' : 'block'}` }}
				>
					<Followers />
					<SwitchFriends />
					<FriendsSearch />
					{this.props.friends ? (
						!this.props.friends.length ? (
							<SearchNotFound searchText={this.props.searchText} />
						) : (
							''
						)
					) : (
						''
					)}
					{this.props.friends
						? this.props.friends.map((item, index) => {
								let name = parseName(item.name.first, item.name.last);
								return (
									<FriendItem
										key={index}
										name={name}
										friendPhoto={item.picture.large}
									/>
								);
						  })
						: ''}
				</FriendsContainer>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	if (state.Friends.data && state.Friends.searchFriends) {
		return {
			friends: state.Friends.data.filter(item => {
				return item.name.first.includes(state.Friends.searchFriends);
			}),
			friendsSearch: state.Friends.searchFriends,
			friendsLoad: state.Friends.loading,
			searchText: state.Friends.searchFriends,
		};
	}
	return {
		friends: state.Friends.data,
		friendsSearch: state.Friends.searchFriends,
		friendsLoad: state.Friends.loading,
		searchText: state.Friends.searchFriends,
	};
};

const mapDispatchToProps = dispatch => ({
	dataFriends: () => {
		dispatch(fetchFriends());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Friends);
