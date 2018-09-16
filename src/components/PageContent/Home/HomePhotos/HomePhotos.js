import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// Styled Components
import { PhotosContainer, MyPhots } from './HomePhotosStyled';

import { GrayLink, BlockTitle } from './../HomeStyled';

// React Components
import Photo from './Photo';

//Actions
import fetchPhotos from './../../../../actions/Photos/FetchPhotos';

class ProfilesPhotos extends PureComponent {
	componentDidMount() {
		this.props.dataPhotos();
	}
	render() {
		if (this.props.photos) {
			this.props.photos.map((item, index) => {});
		}
		return (
			<PhotosContainer>
				<BlockTitle>
					<span>My Photos</span>
					<GrayLink href="#">Show on the map</GrayLink>
				</BlockTitle>
				<MyPhots>
					{this.props.photos
						? this.props.photos.slice(0, 4).map((item, index) => {
								return <Photo imgUrl={item.urls.regular} key={index} />;
						  })
						: ''}
				</MyPhots>
			</PhotosContainer>
		);
	}
}

const mapStateToProps = state => ({
	photos: state.Photos.data,
});

const mapDispatchToProps = dispatch => ({
	dataPhotos() {
		dispatch(fetchPhotos());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfilesPhotos);
