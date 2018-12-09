import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

// React Components

import Followers from './Followers';
import SwitchFriends from './SwitchFriends';
import FriendsSearch from './FriendsSearch';
import Friend from './Friend';
import ContentLoad from './../../ContentLoad/ContentLoad';
import SearchNotFound from './../../SearchNotFound/SearchNotFound';

// Styled Components

import { FriendsContainer } from './FriendsStyled';

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
					{this.props.friends  ? (
						!this.props.friends.length ? (
							<SearchNotFound searchText={this.props.searchText} />
						) : ('') ) : ('')
					}
					
					{this.props.friends
						? this.props.filterFriends
							? this.props.filterFriends.map((item, index) => {
									let name = parseName(item.name.first, item.name.last);
									return (
										<Friend
											key={index}
											name={name}
											friendPhoto={item.picture.large}
											age={item.dob.age}
										/>
									);
							  })
							: this.props.friends.map((item, index) => {
									let name = parseName(item.name.first, item.name.last);
									return (
										<Friend
											key={index}
											name={name}
											friendPhoto={item.picture.large}
											age={item.dob.age}
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
	if (state.Friends.data) {
		state.Friends.data.sort((a, b) => {
			let nameA = a.name.first.toLowerCase();
			let nameB = b.name.first.toLowerCase();
			if (nameA < nameB) return -1;
			if (nameA > nameB) return 1;
			return 0;
		});
	}
	if (state.Friends.data && state.Friends.searchFriends) {
		let searchText = state.Friends.searchFriends;
		return {
			friends: state.Friends.data.filter(item =>
				item.name.first.includes(searchText)
			),
			friendsSearch: state.Friends.searchFriends,
			friendsLoad: state.Friends.loading,
			searchText: state.Friends.searchFriends,
			filterFriends: state.Friends.filterFriends
				? state.Friends.filterFriends.filter(item =>
						item.name.first.includes(searchText)
				  )
				: '',
		};
	}
	return {
		friends: state.Friends.data,
		friendsSearch: state.Friends.searchFriends,
		friendsLoad: state.Friends.loading,
		searchText: state.Friends.searchFriends,
		filterFriends: state.Friends.filterFriends,
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
