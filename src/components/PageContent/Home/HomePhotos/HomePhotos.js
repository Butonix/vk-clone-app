import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// React Components

import HomePhoto from './HomePhoto';
import HomePhotosCarousel from './HomePhotosCarousel';
import ContentLoad from './../../../ContentLoad/ContentLoad';

// Styled Components

import { PhotosContainer, MyPhots } from './HomePhotosStyled';
import { GrayLink, BlockTitle } from './../HomeStyled';

//Actions

import fetchPhotos from './../../../../actions/Photos/FetchPhotos';
import ShowAlbumCarousel from './../../../../actions/ShowAlbumCarousel';

class ProfilePhotos extends PureComponent {
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
			<PhotosContainer>
				<BlockTitle>
					<span>My Photos</span>
					<GrayLink href="#">Show on the map</GrayLink>
				</BlockTitle>
				{this.props.photosLoading ? <ContentLoad /> : ''}
				<MyPhots>
					{this.props.photos
						? this.props.photos.slice(0, 4).map((item, index) => {
								return (
									<HomePhoto
										onClick={this.handleClick.bind(this)}
										imgUrl={item.urls.regular}
										key={index}
									/>
								);
						  })
						: ''}
				</MyPhots>
				<HomePhotosCarousel
					show={this.props.carouselShow}
					currentImage={this.state.currentImage}
				/>
			</PhotosContainer>
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
)(ProfilePhotos);
