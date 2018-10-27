import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styled  Components

import { NewsLent } from './NewsStyled';

// Actions

import fetchNews from './../../../actions/News/FetchNews';

// React Components

import AddWall from './../../AddWall/AddWall';
import Post from './Post/Post';
import ContentLoad from './../../ContentLoad/ContentLoad';

class NewsFeed extends Component {
	componentDidMount() {
		this.props.dataNews();
	}
	render() {
		return (
			<NewsLent>
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
			</NewsLent>
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
)(NewsFeed);
