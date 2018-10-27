import React, { Component } from 'react';

// Styled Components

import { SwitchFriendsContainer, ChoiceSwitch } from './FriendsStyled';

export default class SwitchFriends extends Component {
	render() {
		return (
			<SwitchFriendsContainer>
				<ChoiceSwitch lineShow={true}>All friends</ChoiceSwitch>
				<ChoiceSwitch>Friends online</ChoiceSwitch>
			</SwitchFriendsContainer>
		);
	}
}
