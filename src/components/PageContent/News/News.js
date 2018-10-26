import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';

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
			<NewsContainer >
				<Route path="/news/news-photo" component={NewsPhoto} />
				<Route path="/news/news-feed" component={NewsFeed} />
				<RightMenu  />
			</NewsContainer>
		);
	}
}


