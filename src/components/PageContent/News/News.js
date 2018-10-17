import React, { Component } from 'react';

//  React Components

import AddWall from './../../AddWall/AddWall';

// Styled Components

import { NewsContainer } from './NewsStyled';

export default class News extends Component {
	render() {
		return (
			<NewsContainer>
				<AddWall />
			</NewsContainer>
		);
	}
}
