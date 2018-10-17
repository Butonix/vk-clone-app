import React, { Component } from 'react';
import { withBaseIcon } from 'react-icons-kit';

import { photo } from 'react-icons-kit/fa/photo';
import { video } from 'react-icons-kit/iconic/video';
import { music } from 'react-icons-kit/fa/music';

import { text } from 'react-icons-kit/entypo/text';

import { AddIconsContainer } from './AddWallStyled';

const SideIconContainer = withBaseIcon({
	size: 16,
	style: {
		color: '#4a76a8',
		cursor: 'pointer',
		width: '40px',
		height: '40px',
		opacity: '.7',
	},
});

export class AddIcons extends Component {
	render() {
		return (
			<AddIconsContainer>
				<SideIconContainer icon={photo} />
				<SideIconContainer icon={music} />
				<SideIconContainer icon={video} />
				<SideIconContainer icon={text} />
			</AddIconsContainer>
		);
	}
}

export default AddIcons;
