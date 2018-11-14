import React, { Component } from 'react';
import { connect } from 'react-redux';

// React Components

import AddWall from './../../AddWall/AddWall';
import ContentLoad from './../../ContentLoad/ContentLoad';
import HomePhotosCarousel from './../Home/HomePhotos/HomePhotosCarousel';

// Styled Components

import { NewsLent, NewsPhotoContainer, NewsImage } from './NewsStyled';

// Actions

import fetchPhotos from './../../../actions/Photos/FetchPhotos';
import ShowAlbumCarousel from './../../../actions/ShowAlbumCarousel';

class NewsPhoto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImage: '',
		};
	}
	componentDidMount() {
		this.props.dataPhotos();
	}
	handleClick = e => {
		this.setState({
			currentImage: e.target.style.backgroundImage,
		});
		this.props.showCarousel();
	};
	render() {
		return (
			<NewsLent>
				<AddWall />
				<NewsPhotoContainer>
					{this.props.photosLoading ? <ContentLoad /> : ''}
					{this.props.photos
						? this.props.photos.map((item, index) => {
								return (
									<NewsImage
										key={index}
										style={{ backgroundImage: `url(${item.urls.regular})` }}
										onClick={this.handleClick.bind(this)}
									/>
								);
						  })
						: ''}
					<HomePhotosCarousel
						show={this.props.carouselShow}
						currentImage={this.state.currentImage}
					/>
				</NewsPhotoContainer>
			</NewsLent>
		);
	}
}

const mapStateToProps = state => ({
	photos: state.Photos.data,
	photosLoading: state.Photos.loading,
	carouselShow: state.rootReducer.albumCarouselShow,
});

const mapDispatchToProps = dispatch => ({
	dataPhotos() {
		dispatch(fetchPhotos());
	},
	showCarousel() {
		dispatch(ShowAlbumCarousel());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewsPhoto);
