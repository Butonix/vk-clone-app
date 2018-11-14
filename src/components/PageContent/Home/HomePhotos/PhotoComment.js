import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// Icons

import { ic_close } from 'react-icons-kit/md/ic_close';

// Styled Components

import { ProfileIcon } from './../../../StyledComponents';
import {
	PhotoCommentContainer,
	PhotoCommentRead,
	PhotoCommentProfileName,
	PhotoCommentReadText,
} from './HomePhotosStyled';

// React Compoenents

import RenderIcon from './../../../RenderIcon';

// Actions

import deletePhotoComment from './../../../../actions/deletePhotoComment';

class PhotoComment extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			showClose: false,
		};
	}
	handleMouseOver = e => {
		this.setState({ showClose: true });
	};
	handleMouseLeave = e => {
		this.setState({ showClose: false });
	};
	deleteComment = e => {
		this.props.deleteComment(this.props.timestamp);
	};
	render() {
		const showClose = this.state.showClose;
		return (
			<PhotoCommentContainer
				onMouseOver={this.handleMouseOver.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
			>
				<ProfileIcon size="34" />
				<PhotoCommentRead>
					<PhotoCommentProfileName>
						{this.props.profileName}
					</PhotoCommentProfileName>
					<PhotoCommentReadText>{this.props.readText}</PhotoCommentReadText>
				</PhotoCommentRead>
				<RenderIcon
					icon={ic_close}
					size="15"
					onClick={this.deleteComment.bind(this)}
					style={{
						color: '#4a76a8',
						opacity: '.5',
						paddingLeft: '20px',
						cursor: 'pointer',
						position: 'absolute',
						right: '30px',
						display: showClose ? 'block' : 'none',
					}}
				/>
			</PhotoCommentContainer>
		);
	}
}

const mapStateToProps = state => ({
	comments: state.PhotoComments.photoComments,
});

const mapDispatchToProps = dispatch => ({
	deleteComment: timestamp => {
		dispatch(deletePhotoComment(timestamp));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoComment);
