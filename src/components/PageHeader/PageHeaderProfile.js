import React, { Component } from 'react';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';

// React Components

import RenderIcon from './../RenderIcon';

// Styled Components

import { ProfileIcon } from './../StyledComponents';
import { ProfileContainer } from './PageHeaderStyled';

const arrowStyle = {
	marginLeft: '10px',
	color: '#fff',
	cursor: 'pointer',
};

export default class PageHeaderProfile extends Component {
	render() {
		return (
			<ProfileContainer>
				<span>Иван</span>
				<ProfileIcon size="28" />
				<RenderIcon size="12" style={arrowStyle} icon={chevronDown} />
			</ProfileContainer>
		);
	}
}
