import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';

// Icons

import { search } from 'react-icons-kit/fa/search';

// Styled Components

import { FriendsSearchContainer, FriendsSearchField } from './FriendsStyled';

import searchFriends from './../../../actions/Friends/SearchFriends';

// React Components

import RenderIcon from './../../RenderIcon';

const searchStyles = {
	color: '#466a94',
	cursor: 'pointer',
	opacity: '.9',
};

class FriendsSearch extends PureComponent {
	handleChange(e) {
		this.props.searchFriends(e.target.value.toLowerCase());
	}
	render() {
		return (
			<FriendsSearchContainer>
				<RenderIcon icon={search} size={18} style={searchStyles} />
				<FriendsSearchField
					placeholder="Start typing a friend's name"
					autoFocus={true}
					onChange={this.handleChange.bind(this)}
				/>
			</FriendsSearchContainer>
		);
	}
}

const mapStateToProps = state => ({
	friends: state.Friends.data,
});

const mapDispatchToProps = dispatch => ({
	searchFriends: text => {
		dispatch(searchFriends(text));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FriendsSearch);
