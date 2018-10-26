import React, { Component } from 'react';
import { connect } from 'react-redux';

//Icons

import { withBaseIcon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';

// Actions

import fetchPhotos from './../../../../actions/Photos/FetchPhotos';
import HidePhotoAlbum from './../../../../actions/PhotoAlbums/HidePhotoAlbum';

// Styled Components

import {
	ViewAlbumContainer,
	ViewAlbumContent,
	ViewAlbumTitle,
	ViewAlbumAuthor,
	ViewAlbumYears,
	ViewAlbumImages,
	AlbumImage,
} from './HomePhotoAlbumsStyled';

const SideIconContainer = withBaseIcon({
	size: 20,
	style: {
		color: '#4a76a8',
		cursor: 'pointer',
		position: 'absolute',
		right: '20px',
		top: '20px',
		width: '30px',
		height: '30px',
		opacity: '.7',
	},
});

class ViewAlbum extends Component {
	componentDidMount() {
		this.props.dataPhotos();
	}
	handleClick(e) {
		this.props.hideAlbum();
	}
	showDesciptionLeave() {
		this.setState({ AlbumPreviewShow: false });
	}
	componentWillMount() {
		document.addEventListener('mousedown', this.outSideClick, false);
	}
	componentWillUnmount() {
		document.removeEventListener('mousedown', this.outSideClick, false);
	}

	outSideClick = e => {
		if (!this.props.photosLoading && this.props.albumPhotosShow) {
			if (!this.modal.contains(e.target)) {
				this.props.hideAlbum();
			}
			return;
		}
	};

	render() {
		return (
			<ViewAlbumContainer show={this.props.show}>
				<ViewAlbumContent ref={node => (this.modal = node)}>
					<ViewAlbumTitle>
						<ViewAlbumAuthor href="#">Ivan Zvonkov</ViewAlbumAuthor>
						<ViewAlbumYears>2018-2019</ViewAlbumYears>
						<SideIconContainer
							icon={ic_close}
							onClick={this.handleClick.bind(this)}
						/>
					</ViewAlbumTitle>
					<ViewAlbumImages>
						{this.props.photos
							? this.props.photos.map((item, index) => {
									return (
										<AlbumImage
											key={index}
											style={{ backgroundImage: `url(${item.urls.regular})` }}
										/>
									);
							  })
							: ''}
					</ViewAlbumImages>
				</ViewAlbumContent>
			</ViewAlbumContainer>
		);
	}
}

const mapStateToProps = state => ({
	photos: state.Photos.data,
	photosLoading: state.Photos.loading,
	albumPhotosShow: state.rootReducer.photoAlbumShow,
});

const mapDispatchToProps = dispatch => ({
	dataPhotos() {
		dispatch(fetchPhotos());
	},
	hideAlbum() {
		dispatch(HidePhotoAlbum());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewAlbum);
