import React, { Component } from 'react';

// Styled Components
import {
	PostContainer,
	PostAuthorImage,
	PostAuthor,
	PostTop,
	PostImage,
	PostDescription,
	PostTitle,
	PostHeader,
	PostText,
} from './PostStyled';

//  React Components

import DateParse from './../../../DateParse/DateParse';

export default class Post extends Component {
	render() {
		return (
			<PostContainer>
				<PostTop>
					<PostAuthorImage />
					<PostHeader>
						<PostAuthor>{this.props.author}</PostAuthor>
						<DateParse date={this.props.date} />
					</PostHeader>
				</PostTop>
				<PostText>{this.props.postText}</PostText>
				<PostImage
					style={{
						backgroundImage: `url(${this.props.postImage})`,
					}}
				/>
				<PostDescription>
					<PostTitle>{this.props.title}</PostTitle>
				</PostDescription>
			</PostContainer>
		);
	}
}
