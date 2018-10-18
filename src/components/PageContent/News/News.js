import React, { Component } from 'react';

//  React Components

import AddWall from './../../AddWall/AddWall';
import Post from './Post/Post';

// Styled Components

import { 
	NewsContainer ,
	NewsFeed,
	NewsLinks
} from './NewsStyled';

export default class News extends Component {
	render() {
		return (
			<NewsContainer>
				<NewsFeed>
					<AddWall />
					<Post />
				</NewsFeed>
				<NewsLinks>
					
				</NewsLinks>
			</NewsContainer>
		);
	}
}
