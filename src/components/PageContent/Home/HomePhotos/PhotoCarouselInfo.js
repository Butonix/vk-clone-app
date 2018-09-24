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
	PhotoCommentHidden,
	AddComment
} from './HomePhotosStyled';

// React Components

import RenderIcon from './../../../RenderIcon';

// UI

import { Button,LightButton } from './../../../UI/Button';


const hurtStyle = {
	color: '#4a76a8',
	opacity: '.7',
	opacity: '.6',
	paddingRight: '20px',
};

export default class PhotoCarouselInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			commentsHidden: false
		}
	}
	handleClick = e => {
		if (!this.state.commentsHidden) {
			this.setState({
				commentsHidden: true
			})
		} else {
			this.setState({
				commentsHidden: false
			})
		}
		
	}
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
					<RenderIcon icon={heart} size="20" style={hurtStyle} />
					<RenderIcon icon={share} size="20" style={hurtStyle} />
				</SocialIcons>
				<PhotoComments>
					<AddComment>
						{/* 
							TODO:
							1. Скрывать панель при клике на перелистывание фотографий ~ 5 мин
							2. Создать заранее массив размером равным количествам фотографий
							3. При добавлении комменатрия добавлять его в объект с числовым индексом
							равным номеру индекса(фотографии)
							4. При выводе коменатриев сравнивать идекс фотографии и числовой индекс 
							в объекте с комментариями
							5. Давать уникальный id каждому коменатрию для дальнейшего удаления
							6. По возможности выводить дату создания комментария					
						*/}
						<ProfileIcon size="25" />
						<PhotoCommentField 
							placeholder="Leave a comment..."
							onClick={this.handleClick.bind(this)}
						/>
					</AddComment>
					<PhotoCommentHidden show={this.state.commentsHidden}>
						<LightButton onClick={this.handleClick.bind(this)}>Cancel</LightButton>
						<Button>Post</Button>
					</PhotoCommentHidden> 
				</PhotoComments>
			</PhotoInfo>
		);
	}
}
