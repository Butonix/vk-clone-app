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
	return (
		<SideIconContainer
			icon={props.icon}
			onClick={props.onClick}
			className={props.className}
		/>
	);
};

class HomePhotosCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImage: '',
		};
	}
	componentWillReceiveProps(nextProps) {
		const link = nextProps.currentImage.split('"')[1];
		this.setState({
			currentImage: link,
		});
	}
	handleClick = e => {
		let regularArray = [];
		if (this.props.photos) {
			this.props.photos.forEach(item => {
				regularArray.push(item.urls.regular);
			});
		}
		if (e.currentTarget.className === 'next') {
			let currentIndex = regularArray.indexOf(this.state.currentImage);
			let endIndex = regularArray.length - 1;
			if (currentIndex !== endIndex) {
				currentIndex++;
			}
			if (currentIndex === endIndex) {
				this.setState({ currentImage: regularArray[0] });
			} else {
				this.setState({ currentImage: regularArray[currentIndex] });
			}
		}

		if (e.currentTarget.className === 'previous') {
			let currentIndex = regularArray.indexOf(this.state.currentImage);
			let nowCount = currentIndex - 1;
			let lastIndex = regularArray.length - 1;
			console.log(currentIndex);
			if (currentIndex === 0) {
				this.setState({ currentImage: regularArray[lastIndex] });
			} else {
				this.setState({ currentImage: regularArray[nowCount] });
			}
		}

		if (e.currentTarget.className === 'close') {
			this.props.hideCarousel();
		}
	};
	render() {
		console.log(this.state);
		return (
			<CarouselContainer show={this.props.show}>
				<CarouselContent>
					<LeftPhoto>
						<CurrentImage
							style={{ backgroundImage: `url(${this.state.currentImage})` }}
						/>
					</LeftPhoto>
					<RightContent />
				</CarouselContent>
				<RenderIcon
					icon={ic_close}
					size="30"
					className="close"
					style={closeStyles}
					onClick={this.handleClick.bind(this)}
				/>
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
