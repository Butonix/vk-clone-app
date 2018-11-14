import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//  React Components

import NewsFeed from './NewsFeed';
import RightMenu from './../../RightMenu/RightMenu';
import NewsPhoto from './NewsPhoto';

// Styled Components

import { NewsContainer } from './NewsStyled';

export default class News extends Component {
	render() {
		return (
			<NewsContainer>
				<Route path="/Vk-clone/news/news-photo" component={NewsPhoto} />
				<Route path="/Vk-clone/news/news-feed" component={NewsFeed} />
				<RightMenu />
			</NewsContainer>
		);
	}
}
