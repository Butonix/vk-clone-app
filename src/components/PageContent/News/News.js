import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';

// Actions

import fetchNews from './../../../actions/News/FetchNews';

//  React Components

import AddWall from './../../AddWall/AddWall';
import Post from './Post/Post';
import ContentLoad from './../../ContentLoad/ContentLoad';
import NewsMenu from './NewsMenu/NewsMenu';

// Styled Components

import { NewsContainer, NewsFeed } from './NewsStyled';

class News extends Component {
	componentDidMount() {
		this.props.dataNews();
	}
	render() {
		return (
			<NewsContainer>
				<NewsFeed>
					<AddWall />
					{this.props.newsLoaded ? <ContentLoad /> : ''}
					{this.props.news
						? this.props.news.articles.map((item, index) => {
								if (item.urlToImage) {
									return (
										<Post
											key={index}
											author={item.source.name}
											title={item.title}
											description={item.description}
											postImage={item.urlToImage}
											postText={item.description}
											date={item.publishedAt}
										/>
									);
								}
						  })
						: ''}
				</NewsFeed>
				<NewsMenu />
			</NewsContainer>
		);
	}
}

const mapStateToProps = state => ({
	news: state.News.data,
	newsLoaded: state.News.loading,
	posts: state.WallAddPost.posts,
});

const mapDispatchToProps = dispatch => ({
	dataNews: () => {
		dispatch(fetchNews());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(News);
