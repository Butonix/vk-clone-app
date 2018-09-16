import React, { Component } from 'react';
import styled from 'styled-components';
import { withBaseIcon } from 'react-icons-kit';
import { barChart } from 'react-icons-kit/fa/barChart';
import { ProfileContainer } from './../HomeStyled';

const SideIconContainer = withBaseIcon({
	size: 17,
	style: {
		color: '#55677d',
		cursor: 'pointer',
		width: '30px',
		height: '30px',
	},
});

const ImageContainer = styled.div`
	width: 200px;
	height: 200px;
	overflow: hidden;
	background: url('/images/profile.jpg');
	background-size: cover;
	background-position: center;
`;

const ChangeButton = styled.button`
	background: #e5ebf1;
	border: none;
	color: #55677d;
	font-size: 13px;
	font-weight: normal;
	padding: 6px 70px;
	border-radius: 4px;
`;

const StaticButton = styled.div`
	background: #e5ebf1;
	border-radius: 3px;
`;

const ChangeInfoContainer = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
`;

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
						<SideIconContainer icon={barChart} />
					</StaticButton>
				</ChangeInfoContainer>
			</ProfileContainer>
		);
	}
}
