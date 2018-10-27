import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import fetchPhotos from './../../../../actions/Photos/FetchPhotos';
import HideAlbumCarousel from './../../../../actions/HideAlbumCarousel';

//Icons
import { ic_close } from 'react-icons-kit/md/ic_close';
import { ic_navigate_before } from 'react-icons-kit/md/ic_navigate_before';
import { ic_navigate_next } from 'react-icons-kit/md/ic_navigate_next';

// React Components
import RenderIcon from './.././../../RenderIcon';
import PhotoCarouselInfo from './PhotoCarouselInfo';

// Styled Components
import {
	CarouselContainer,
	CarouselContent,
	LeftPhoto,
	RightContent,
	CurrentImage,
	BottomPanel,
	BottomPanelYear,
	BottomPanelCount,
	BottomPanelLinks,
	PanelLink,
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
};

const previousArrowStyles = {
	color: '#fff',
	cursor: 'pointer',
	position: 'absolute',
	left: '5%',
	top: '50%',
	width: '50px',
	height: '50px',
};

{
	/* 
	TODO:
	1. Пофиксить выделение ссылок при перелистывании фотографий
	2. Сделать outSideClick
	
*/
}
class HomePhotosCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImage: '',
			currentImageIndex: '',
			currentComment: true,
			currentDates: [],
		};
	}

	componentWillReceiveProps(nextProps) {
		const arr = [];
		const dates = [];
		const link = nextProps.currentImage.split('"')[1];

		if (nextProps.photos) {
			nextProps.photos.forEach(item => arr.push(item.urls.regular));
			nextProps.photos.forEach(item => dates.push(item.created_at));
		}
		let photoNumber = arr.indexOf(link) + 1;
		this.setState({
			currentImage: link,
			currentImageIndex: photoNumber,
			currentDates: dates,
		});
	}

	componentWillMount() {
		document.addEventListener('mousedown', this.outSideClick, false);
	}
	componentWillUnmount() {
		document.removeEventListener('mousedown', this.outSideClick, false);
	}

	outSideClick = e => {
		if (!this.props.photosLoading && this.props.albumCarouselShow) {
			if (!this.modal.contains(e.target)) {
				this.props.hideCarousel();
			}
			return;
		}
	};

	handleClick = e => {
		this.setState({
			currentComment: false,
		});
		let regularArray = [];
		if (this.props.photos) {
			this.props.photos.forEach(item => {
				regularArray.push(item.urls.regular);
			});
		}
		let lastIndex = regularArray.length - 1;
		let currentIndex = regularArray.indexOf(this.state.currentImage);

		if (e.currentTarget.className === 'next') {
			if (currentIndex !== lastIndex) currentIndex++;
			this.setState(prevState => {
				if (prevState.currentImageIndex === lastIndex + 1) {
					return {
						currentImage: regularArray[0],
						currentImageIndex: 1,
					};
				} else {
					return {
						currentImage: regularArray[currentIndex],
						currentImageIndex: prevState.currentImageIndex + 1,
					};
				}
			});
		}

		if (e.currentTarget.className === 'previous') {
			if (currentIndex !== 0) currentIndex--;
			this.setState(prevState => {
				if (prevState.currentImageIndex === 1) {
					return {
						currentImage: regularArray[lastIndex],
						currentImageIndex: lastIndex + 1,
					};
				} else {
					return {
						currentImage: regularArray[currentIndex],
						currentImageIndex: prevState.currentImageIndex - 1,
					};
				}
			});
		}

		if (e.currentTarget.className === 'close') {
			this.props.hideCarousel();
		}
	};

	render() {
		const ImageNumber = this.state.currentImageIndex;
		if (this.props.photos) {
			const PhotosCount = this.props.photos.length;
			return (
				<CarouselContainer name="modal-close" show={this.props.show}>
					<CarouselContent ref={node => (this.modal = node)}>
						<LeftPhoto>
							<CurrentImage
								style={{ backgroundImage: `url(${this.state.currentImage})` }}
							/>
							<BottomPanel>
								<BottomPanelYear> 2017-2018 </BottomPanelYear>
								<BottomPanelCount>
									{ImageNumber} of {PhotosCount}
								</BottomPanelCount>
								<BottomPanelLinks>
									<PanelLink>Share</PanelLink>
									<PanelLink>Tag Photo</PanelLink>
									<PanelLink>Remove</PanelLink>
									<PanelLink>More</PanelLink>
								</BottomPanelLinks>
							</BottomPanel>
							<RenderIcon
								className="next"
								icon={ic_navigate_next}
								size="40"
								style={nextArrowStyles}
								onClick={this.handleClick.bind(this)}
							/>
							<RenderIcon
								icon={ic_navigate_before}
								size="40"
								className="previous"
								style={previousArrowStyles}
								onClick={this.handleClick.bind(this)}
							/>
						</LeftPhoto>
						<RightContent>
							<PhotoCarouselInfo
								imageIndex={this.state.currentImageIndex}
								dates={this.state.currentDates}
							/>
						</RightContent>
					</CarouselContent>
					<RenderIcon
						icon={ic_close}
						size="30"
						className="close"
						style={closeStyles}
						onClick={this.handleClick.bind(this)}
					/>
				</CarouselContainer>
			);
		}
		return <div />;
	}
}

const mapStateToProps = state => ({
	photos: state.Photos.data,
	photosLoading: state.Photos.loading,
	albumCarouselShow: state.rootReducer.albumCarouselShow,
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
