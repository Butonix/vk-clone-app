import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import fetchPhotos from './../../../../actions/Photos/FetchPhotos';
import HideAlbumCarousel from './../../../../actions/HideAlbumCarousel';

//Icons
import { withBaseIcon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { ic_navigate_before } from 'react-icons-kit/md/ic_navigate_before';
import { ic_navigate_next } from 'react-icons-kit/md/ic_navigate_next';

// Styled Components
import {
	CarouselContainer,
	CarouselContent,
	LeftPhoto,
	RightContent,
	CurrentImage,
} from './HomePhotosStyled';

const closeStyles = {
	color: '#fff',
	cursor: 'pointer',
	position: 'absolute',
	right: '20px',
	top: '20px',
	width: '30px',
	height: '30px',
	opacity: '.7',
};

const nextArrowStyles = {
	color: '#fff',
	cursor: 'pointer',
	position: 'absolute',
	right: '5%',
	top: '50%',
	width: '50px',
	height: '50px',
	opacity: '.7',
};

const previousArrowStyles = {
	color: '#fff',
	cursor: 'pointer',
	position: 'absolute',
	left: '5%',
	top: '50%',
	width: '50px',
	height: '50px',
	opacity: '.7',
};

const RenderIcon = props => {
	const SideIconContainer = withBaseIcon({
		size: props.size,
		style: props.style,
	});
	return <SideIconContainer icon={props.icon} onClick={props.onClick} />;
};

class HomePhotosCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImage: '',
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			currentImage: nextProps.currentImage,
		});
	}
	handleClick = e => {
		this.props.hideCarousel();
	};
	render() {
		const currentImageUrl = this.state.currentImage.split('"')[1];
		const regularArray = [];
		if (this.props.photos) {
			this.props.photos.forEach((item, index, array) => {
				regularArray.push(item.urls.regular);
			});
		}
		return (
			<CarouselContainer show={this.props.show}>
				<CarouselContent>
					<LeftPhoto>
						<CurrentImage
							style={{ backgroundImage: this.state.currentImage }}
						/>
					</LeftPhoto>
					<RightContent />
				</CarouselContent>
				<RenderIcon
					icon={ic_close}
					size="30"
					style={closeStyles}
					onClick={this.handleClick.bind(this)}
				/>
				<RenderIcon icon={ic_navigate_next} size="40" style={nextArrowStyles} />
				<RenderIcon
					icon={ic_navigate_before}
					size="40"
					style={previousArrowStyles}
				/>
			</CarouselContainer>
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
	hideCarousel() {
		dispatch(HideAlbumCarousel());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePhotosCarousel);
