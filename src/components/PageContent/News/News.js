import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';

// Actions

import fetchNews from './../../../actions/News/FetchNews';

//  React Components

import AddWall from './../../AddWall/AddWall';
import Post from './Post/Post';

// Styled Components

import { NewsContainer, NewsFeed, NewsLinks } from './NewsStyled';

class News extends Component {
	componentDidMount() {
		this.props.dataNews();
	}
	render() {
		return (
			<NewsContainer>
				<NewsFeed>
					<AddWall />
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
				<NewsLinks />
			</NewsContainer>
		);
	}
}

const mapStateToProps = state => ({
	news: state.News.data,
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
