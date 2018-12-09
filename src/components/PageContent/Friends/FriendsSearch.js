import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// React Components

import RenderIcon from './../../RenderIcon';

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

// Icons

import { search } from 'react-icons-kit/fa/search';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';

//  Actions

import searchFriends from './../../../actions/Friends/SearchFriends';
import fetchFriends from './../../../actions/Friends/FetchFriends';
import filterFriendsFemale from './../../../actions/Friends/FilterFemale';
import filterFriendsMale from './../../../actions/Friends/FilterMale';
import filterFriendsAny from './../../../actions/Friends/FilterAny';
import filterFriendsAgeFrom from './../../../actions/Friends/FilterAgeFrom';
import filterFriendsAgeTo from './../../../actions/Friends/filterAgeTo';
import filterAgeNumbes from './../../../actions/Friends/filterAgeNumbers';

// Functions

import filterSexFemale from './filterSexFemale';
import filterSexMale from './filterSexMale';
import filterAgeFrom from './filterAgeFrom';
import filterAgeTo from './filterAgeTo';
import generateFilterAgeNumbers from './generateFilterAgeNumbers';


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
			filterAgeFrom: 14,
			filterAgeTo: 80,
			female: false,
			male: false,
			any: false
		};
	}
	componentDidMount() {
		this.props.dataFriends();
		this.props.filterAgeNumbers(
			generateFilterAgeNumbers(
				this.state.filterAgeFrom,
				this.state.filterAgeTo
			)
		)
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
		const rusRegExp = /[а-яА-ЯёЁ]/g;
		let inputValue = e.target.value;
		if (inputValue.search(rusRegExp) !== -1) {
			this.searchField.value = inputValue.replace(rusRegExp, '');
		} else {
			this.props.searchFriends(e.target.value.toLowerCase().trim());
		}
	}
	filterAgeFriendsAll = (friends) => {
		const friendsAgeTo = filterAgeTo(friends, this.state.filterAgeTo);
		const friendsAgeFrom = filterAgeFrom(friends, this.state.filterAgeFrom);
		this.props.filterTo(friendsAgeTo);
		this.props.filterFrom(friendsAgeFrom);
	}
	filterAgeFriends = (friends, isAgeToCheck, isAgeFromCheck, value) => {
		let filterAge = isAgeToCheck ? filterAgeTo(friends, value) : filterAgeFrom(friends, value);
		if (isAgeToCheck) {
			this.props.filterTo(filterAge);
		} else if (isAgeFromCheck) {
			this.props.filterFrom(filterAge);
		}
		this.setState(() => {
			if (isAgeToCheck) {
				return {
					filterAgeTo: value
				}
			} else if (isAgeFromCheck) {
				return {
					filterAgeFrom: value
				}
			}
		}, () => {
			this.props.filterAgeNumbers(
				generateFilterAgeNumbers(
					this.state.filterAgeFrom,
					this.state.filterAgeTo
				)
			);
		});
	}

	filterAgeFriendsSex = (targetName, targetChecked, friends) => {
		if (targetName === 'male') {
			if (targetChecked) {
				const friendsMale = filterSexMale(friends);
				this.props.filterMale(friendsMale);
			} else {
				this.props.filterAny(friends);
			}
			this.setState({
				female: false,
				male: targetChecked ? true : false,
				any: false,
			});
		}
		if (targetName === 'female') {
			if (targetChecked) {
				const friendsFemale = filterSexFemale(friends);
				this.props.filterFemale(friendsFemale);
			} else {
				this.props.filterAny(friends);
			}
			this.setState({
				female: targetChecked ? true : false,
				male: false,
				any: false,
			});
		}
		if (targetName === 'any') {
			if (targetChecked) {
				this.props.filterAny(friends);
				this.filterAgeFriendsAll(friends);
				this.setState({
					female: false,
					male: false,
					any: targetChecked ? true : false,
				});
			}
		}
		return;
	}
	filteredFriends(e) {
		const { name, checked, value } = e.target;
		const friends = this.props.filterFriends || this.props.friends;
		if (e.target.name === 'age-from') {
			this.filterAgeFriends(friends, false, true, value);
		}
		if (e.target.name === 'age-to') {
			this.filterAgeFriends(friends, true, false, value);
		}
		this.filterAgeFriendsSex(name, checked, this.props.friends);
	}
	componentWillMount() {
		document.addEventListener('mousedown', this.outSideClick, false);
	}
	componentWillUnmount() {
		document.removeEventListener('mousedown', this.outSideClick, false);
	}

	outSideClick = (e) => {
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
		const filterAgeNumbers = this.props.filterAgesNumbers || [];
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
							onChange={this.filteredFriends.bind(this)}
							value={this.state.filterAgeFrom}
						>
							{filterAgeNumbers.map((item, index) => {
								return (
									<ChoiceAgeOption key={index} value={item}>
										from {item}
									</ChoiceAgeOption>
								);
							})}
						</ChoiceAgeFrom>
						<ChoiceAgeTo
							name="age-to"
							onChange={this.filteredFriends.bind(this)}
							value={this.state.filterAgeTo}
						>
							{filterAgeNumbers.map((item, index) => {
								return (
									<ChoiceAgeOption key={index} value={item}>
										to {item}
									</ChoiceAgeOption>
								);
							})}
						</ChoiceAgeTo>
					</ChoiceAge>
					<ChoiceSex ref={node => (this.choiceSex = node)}>
						<ChoiceSexLabel>
							<ChoiceSexRadio
								name="female"
								type="checkbox"
								onChange={this.filteredFriends.bind(this)}
								checked={this.state.female}
							/>
							<ChoiceSexText>Female</ChoiceSexText>
						</ChoiceSexLabel>
						<ChoiceSexLabel>
							<ChoiceSexRadio
								name="male"
								type="checkbox"
								onChange={this.filteredFriends.bind(this)}
								checked={this.state.male}
							/>
							<ChoiceSexText>Male</ChoiceSexText>
						</ChoiceSexLabel>
						<ChoiceSexLabel>
							<ChoiceSexRadio
								name="any"
								type="checkbox"
								onChange={this.filteredFriends.bind(this)}
								checked={this.state.any}
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
	filterFriends: state.Friends.filterFriends,
	filterAgesNumbers: state.Friends.filterAgesNumbers
});

const mapDispatchToProps = dispatch => ({
	searchFriends: text => {
		dispatch(searchFriends(text));
	},
	dataFriends: () => {
		dispatch(fetchFriends());
	},
	filterAgeNumbers: numbers => {
		dispatch(filterAgeNumbes(numbers))
	},
	filterMale: friends => {
		dispatch(filterFriendsMale(friends));
	},
	filterFemale: friends => {
		dispatch(filterFriendsFemale(friends));
	},
	filterAny: friends => {
		dispatch(filterFriendsAny(friends));
	},
	filterFrom: friends => {
		dispatch(filterFriendsAgeFrom(friends));
	},
	filterTo: friends => {
		dispatch(filterFriendsAgeTo(friends))
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FriendsSearch);
