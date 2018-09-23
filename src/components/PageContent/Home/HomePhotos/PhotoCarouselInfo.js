import React, { Component } from 'react';

// Icons
import { heart } from 'react-icons-kit/fa/heart';
import { share } from 'react-icons-kit/fa/share';

// Styled Components
import { ProfileIcon } from './../../../StyledComponents';

import {
	PhotoInfo,
	PhotoDate,
	PhotoInfoTop,
	PhotoInfoProfileName,
	AuthorInfo,
	SocialIcons,
	PhotoComments,
	PhotoCommentField,
} from './HomePhotosStyled';

// React Components

import RenderIcon from './../../../RenderIcon';

const hurtStyles = {
	color: '#4a76a8',
	opacity: '.7',
	opacity: '.6',
	paddingRight: '20px',
};

export default class PhotoCarouselInfo extends Component {
	render() {
		return (
			<PhotoInfo>
				<PhotoInfoTop>
					<ProfileIcon size="40" />
					<AuthorInfo>
						<PhotoInfoProfileName>Ivan Zvonkov</PhotoInfoProfileName>
						<PhotoDate>27 May at 12:37 pm</PhotoDate>
					</AuthorInfo>
				</PhotoInfoTop>
				<SocialIcons>
					<RenderIcon icon={heart} size="20" style={hurtStyles} />
					<RenderIcon icon={share} size="20" style={hurtStyles} />
				</SocialIcons>
				<PhotoComments>
					<ProfileIcon size="25" />
					<PhotoCommentField placeholder="Leave a comment..." />
				</PhotoComments>
			</PhotoInfo>
		);
	}
}
