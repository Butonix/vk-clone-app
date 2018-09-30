import React, { Component } from 'react';
import { connect } from 'react-redux';

// Icons
import { heart } from 'react-icons-kit/fa/heart';
import { share } from 'react-icons-kit/fa/share';

//Actions
import addPhotoComment from './../../../../actions/AddPhotoComment';

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
	PhotoCommentHidden,
	AddComment,
	PhotoCommentsContainer,
} from './HomePhotosStyled';

// React Components
import RenderIcon from './../../../RenderIcon';
import PhotoComment from './PhotoComment';

// UI
import { Button, LightButton } from './../../../UI/Button';

const hurtStyle = {
	color: '#4a76a8',
	opacity: '.7',
	opacity: '.6',
	paddingRight: '20px',
};

class PhotoCarouselInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			commentsHidden: false,
		};
	}
	componentWillReceiveProps(nextProps) {
		if (!this.props.comment) {
			this.commentField.value = '';
			this.setState({
				commentsHidden: false,
			});
		}
	}
	handleClick = e => {
		if (!this.state.commentsHidden) {
			this.setState({
				commentsHidden: true,
			});
		} else {
			this.setState({
				commentsHidden: false,
			});
		}
	};
	addComment = e => {
		if (this.commentField.value.trim()) {
			this.props.addPhotoComment({
				timestamp: Date.now().toString(),
				comment: this.commentField.value,
				index: this.props.imageIndex,
			});
		}

		this.commentField.value = '';
		this.setState({
			commentsHidden: false,
		});
	};
	render() {
		console.log(this.props);
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
					<RenderIcon icon={heart} size="20" style={hurtStyle} />
					<RenderIcon icon={share} size="20" style={hurtStyle} />
				</SocialIcons>
				<PhotoCommentsContainer>
					{this.props.comments
						.filter(item => item.index === this.props.imageIndex)
						.map((item, index) => (
							<PhotoComment
								profileName="Ivan Zvonkov"
								readText={item.comment}
								key={index}
								timestamp={item.timestamp}
							/>
						))}
				</PhotoCommentsContainer>
				<PhotoComments>
					<AddComment onClick={this.handleClick.bind(this)}>
						{/* 
							TODO:
							1. Скрывать панель при клике на перелистывание фотографий ~ 5 мин
							2. Добавлять в массив объекты с id комментария, текстом
							3. По возможности выводить дату создания комментария	
							4. Делать проверку на пустоту поля				
							5. Чистить содержимое поля при отправке и перелистывании фото
							
						*/}
						<ProfileIcon size="25" />
						<PhotoCommentField
							placeholder="Leave a comment..."
							ref={node => (this.commentField = node)}
						/>
					</AddComment>
					<PhotoCommentHidden show={this.state.commentsHidden}>
						<LightButton onClick={this.handleClick.bind(this)}>
							Cancel
						</LightButton>
						<Button onClick={this.addComment.bind(this)}>Post</Button>
					</PhotoCommentHidden>
				</PhotoComments>
			</PhotoInfo>
		);
	}
}

const mapStateToProps = state => ({
	comments: state.PhotoComments.photoComments.filter(e => {
		const arrStamps = state.PhotoComments.timestamps;
		if (arrStamps) {
			return arrStamps.every(element => element !== e.timestamp);
		} else {
			return e;
		}
	}),
});

const mapDispatchToProps = dispatch => ({
	addPhotoComment: comment => {
		dispatch(addPhotoComment(comment));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoCarouselInfo);
