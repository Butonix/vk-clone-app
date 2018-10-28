import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';

// Icons

import { search } from 'react-icons-kit/fa/search';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';

// Styled Components

import {
	FriendsSearchContainer,
	FriendsSearchField,
	ParametersSearchContainer,
	SearchLabel,
	ChoiceCity,
	ChoiceItem,
	ChoiceAgeFrom,
	ChoiceAgeTo,
	ChoiceAge,
	ChoiceAgeOption,
	ChoiceSex,
	ChoiceSexText,
	ChoiceSexRadio,
	ChoiceSexLabel,
} from './FriendsStyled';
import Link from './../../UI/Link';

//  Actions

import searchFriends from './../../../actions/Friends/SearchFriends';
import fetchFriends from './../../../actions/Friends/FetchFriends';

// React Components

import RenderIcon from './../../RenderIcon';

const searchStyles = {
	color: '#466a94',
	cursor: 'pointer',
	opacity: '.9',
};

const arrowStyles = {
	color: '#466a94',
	cursor: 'pointer',
	opacity: '.9',
};

class FriendsSearch extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			parametersShow: false,
		};
	}
	componentDidMount() {
		this.props.dataFriends();
	}

	handleCLick(e) {
		if (!this.state.parametersShow) {
			this.setState({
				parametersShow: true,
			});
		} else {
			this.setState({
				parametersShow: false,
			});
		}
	}
	handleChange(e) {
		if (e.target.name === 'search-friends') {
			const rusRegExp = /[а-яА-ЯёЁ]/g;
			let inputValue = e.target.value;
			if (inputValue.search(rusRegExp) != -1) {
				this.searchField.value = inputValue.replace(rusRegExp, '');
			}
			this.props.searchFriends(e.target.value.toLowerCase().trim());
		}
		if (e.target.name === 'age-from') {
			console.log(e.target.value);
		}
		if (e.target.name === 'age-to') {
			console.log(e.target.value);
		}
		if (e.target.name === 'choice-female') {
			console.log(e.target.checked);
		}
		if (e.target.name === 'choice-male') {
			console.log(e.target.checked);
		}
		if (e.target.name === 'choice-any') {
			console.log(e.target.checked);
		}
	}
	componentWillMount() {
		document.addEventListener('mousedown', this.outSideClick, false);
	}
	componentWillUnmount() {
		document.removeEventListener('mousedown', this.outSideClick, false);
	}

	outSideClick = e => {
		if (!this.tooltip.contains(e.target)) {
			if (this.state.parametersShow) {
				this.setState({
					parametersShow: false,
				});
			}
			return;
		}
	};

	render() {
		let ageNumbers = [];
		for (let i = 14; i <= 80; i++) ageNumbers.push(i);
		return (
			<FriendsSearchContainer>
				<RenderIcon icon={search} size={18} style={searchStyles} />
				<FriendsSearchField
					placeholder="Start typing a friend's name"
					autoFocus={true}
					onChange={this.handleChange.bind(this)}
					ref={node => (this.searchField = node)}
					name="search-friends"
				/>
				<Link onClick={this.handleCLick.bind(this)}>Parameters</Link>
				<RenderIcon
					icon={ic_keyboard_arrow_down}
					size={16}
					style={arrowStyles}
				/>
				<ParametersSearchContainer
					show={this.state.parametersShow}
					ref={node => (this.tooltip = node)}
				>
					<SearchLabel>City</SearchLabel>
					<ChoiceCity placeholder="Choose City">
						{this.props.friends
							? this.props.friends.map((item, index) => {
									const city =
										item.location.city.charAt(0).toUpperCase() +
										item.location.city.slice(1);
									return <ChoiceItem key={index}>{city}</ChoiceItem>;
							  })
							: ''}
					</ChoiceCity>
					<SearchLabel>Age</SearchLabel>
					<ChoiceAge>
						<ChoiceAgeFrom
							name="age-from"
							onChange={this.handleChange.bind(this)}
						>
							{ageNumbers.map((item, index) => {
								return (
									<ChoiceAgeOption key={index} value={item}>
										from {item}
									</ChoiceAgeOption>
								);
							})}
						</ChoiceAgeFrom>
						<ChoiceAgeTo name="age-to" onChange={this.handleChange.bind(this)}>
							{ageNumbers.map((item, index) => {
								return (
									<ChoiceAgeOption key={index} value={item}>
										to {item}
									</ChoiceAgeOption>
								);
							})}
						</ChoiceAgeTo>
					</ChoiceAge>
					<ChoiceSex>
						<ChoiceSexLabel>
							<ChoiceSexRadio
								name="choice-female"
								type="checkbox"
								onChange={this.handleChange.bind(this)}
							/>
							<ChoiceSexText>Female</ChoiceSexText>
						</ChoiceSexLabel>
						<ChoiceSexLabel>
							<ChoiceSexRadio
								name="choice-male"
								type="checkbox"
								onChange={this.handleChange.bind(this)}
							/>
							<ChoiceSexText>Male</ChoiceSexText>
						</ChoiceSexLabel>
						<ChoiceSexLabel>
							<ChoiceSexRadio
								name="choice-any"
								type="checkbox"
								onChange={this.handleChange.bind(this)}
								checked
							/>
							<ChoiceSexText>Any</ChoiceSexText>
						</ChoiceSexLabel>
					</ChoiceSex>
				</ParametersSearchContainer>
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
	dataFriends: () => {
		dispatch(fetchFriends());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FriendsSearch);
