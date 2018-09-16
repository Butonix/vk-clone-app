import React, { Component } from 'react';

// React Components

import PostChangeContentTemplate from './PostChangeContent';

// Icons

import { withBaseIcon } from 'react-icons-kit';
import { arrows_down } from 'react-icons-kit/linea/arrows_down';

// Styled Components

import { PostChange } from './HomeWallStyled';

const SideIconContainer = withBaseIcon({
	size: 18,
	style: {
		color: '#4a76a8',
		cursor: 'pointer',
		width: '30px',
		height: '30px',
		opacity: '.8 ',
	},
});

export class PostChangeTemplate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			hovArror: true,
		};
	}
	handleMouseOver(e) {
		this.setState({ show: true });
	}
	handleMouseLeave(e) {
		this.setState({ show: false });
	}

	render() {
		return (
			<PostChange>
				<SideIconContainer
					icon={arrows_down}
					onMouseOver={this.handleMouseOver.bind(this)}
				/>
				<PostChangeContentTemplate
					onMouseLeave={this.handleMouseLeave.bind(this)}
					show={false}
					deletePost={this.props.deletePost}
					postId={this.props.postID}
				/>
			</PostChange>
		);
	}
}

export default PostChangeTemplate;
