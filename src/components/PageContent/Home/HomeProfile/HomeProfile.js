import React, { Component } from 'react';
import { withBaseIcon } from 'react-icons-kit';
import { Link } from 'react-router-dom';

// Styled Components

import {
	ImageContainer,
	ChangeButton,
	StaticButton,
	ChangeInfoContainer,
} from './HomeProfileStyled';

import { ProfileContainer } from './../HomeStyled';

// Icons

import { barChart } from 'react-icons-kit/fa/barChart';

const SideIconContainer = withBaseIcon({
	size: 17,
	style: {
		color: '#55677d',
		cursor: 'pointer',
		width: '30px',
		height: '30px',
	},
});

export default class HomeProfile extends Component {
	render() {
		return (
			<ProfileContainer>
				<ImageContainer>
					<img src="" alt="" />
				</ImageContainer>
				<ChangeInfoContainer>
					<ChangeButton>Edit</ChangeButton>
					<StaticButton>
						<Link to="Vk-clone/static">
							<SideIconContainer icon={barChart} />
						</Link>
					</StaticButton>
				</ChangeInfoContainer>
			</ProfileContainer>
		);
	}
}
