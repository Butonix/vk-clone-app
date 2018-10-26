import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// Styled Components

import {
	HomePhotoAlbumsContainer,
	PhotosNumber,
	PhotosTitle,
} from './HomePhotoAlbumsStyled';

import { GrayLink, BlockTitle } from './../HomeStyled';

//Actions

import fetchPhotos from './../../../../actions/Photos/FetchPhotos';
import ShowPhotoAlbum from './../../../../actions/PhotoAlbums/ShowPhotoAlbum';

// React Components

import AlbumPreviewTemplate from './AlbumPreview';
import ViewAlbum from './ViewAlbum';

class HomePhotoAlbums extends PureComponent {
	componentDidMount() {
		this.props.dataPhotos();
	}
	handleClick(e) {
		this.props.showAlbum();
	}
	render() {
		return (
			<HomePhotoAlbumsContainer>
				<BlockTitle>
					<PhotosTitle>
						Photo albums
						<PhotosNumber>2</PhotosNumber>
					</PhotosTitle>
				</BlockTitle>
				{this.props.photos
					? this.props.photos.slice(8).map((item, index) => {
							return (
								<AlbumPreviewTemplate
									key={index}
									imageUrl={item.urls.regular}
									onClick={this.handleClick.bind(this)}
								/>
							);
					  })
					: ''}
				<ViewAlbum show={this.props.albumPhotosShow} />
			</HomePhotoAlbumsContainer>
		);
	}
}

const mapStateToProps = state => ({
	photos: state.Photos.data,
	albumPhotosShow: state.rootReducer.photoAlbumShow,
});

const mapDispatchToProps = dispatch => ({
	dataPhotos() {
		dispatch(fetchPhotos());
	},
	showAlbum() {
		dispatch(ShowPhotoAlbum());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePhotoAlbums);
