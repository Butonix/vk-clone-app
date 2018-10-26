import React, { Component } from 'react';

// Styled Components

import {
	AlbumPreview,
	AlbumPreviewInfo,
	AlbumDescription,
	AlbumPreviewInfoTitle,
	AlbumPreviewInfoNumber,
	AlbumPreviewOverlay,
} from './HomePhotoAlbumsStyled';

export default class AlbumPreviewTemplate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			AlbumPreviewShow: false,
		};
	}
	showDesciption() {
		this.setState({ AlbumPreviewShow: true });
	}
	showDesciptionLeave() {
		this.setState({ AlbumPreviewShow: false });
	}

	render() {
		return (
			<AlbumPreview
				style={{ backgroundImage: `url(${this.props.imageUrl})` }}
				onMouseOver={this.showDesciption.bind(this)}
				onMouseLeave={this.showDesciptionLeave.bind(this)}
				onClick={this.props.onClick}
			>
				<AlbumPreviewInfo
					show={this.state.AlbumPreviewShow}
					onMouseOver={this.showDesciption.bind(this)}
					onMouseLeave={this.showDesciptionLeave.bind(this)}
				>
					<AlbumPreviewInfoTitle>My best photo</AlbumPreviewInfoTitle>
					<AlbumPreviewInfoNumber>10</AlbumPreviewInfoNumber>
				</AlbumPreviewInfo>
				<AlbumDescription show={this.state.AlbumPreviewShow}>
					Super best photos
				</AlbumDescription>
				<AlbumPreviewOverlay />
			</AlbumPreview>
		);
	}
}
