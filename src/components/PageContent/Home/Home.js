import React, { Component } from 'react';

// React Components

import HomeProfile from './HomeProfile/HomeProfile';
import HomeInfo from './HomeInfo/HomeInfo';
import HomePhotos from './HomePhotos/HomePhotos';
import HomeFriends from './HomeFriends/HomeFriends';
import AddWall from './../../AddWall/AddWall';
import HomeWall from './HomeWall/HomeWall';
import HomeGroups from './HomeGroups/HomeGroups';
import HomePhotoAlbums from './HomePhotoAlbums/HomePhotoAlbums';

// Styled components

import { HomeContainer, LeftColum, RightColumn } from './HomeStyled';

export default class Home extends Component {
	render() {
		return (
			<HomeContainer>
				<LeftColum>
					<HomeProfile />
					<HomeFriends />
					<HomeGroups />
					<HomePhotoAlbums />
				</LeftColum>
				<RightColumn>
					<HomeInfo />
					<HomePhotos />
					<AddWall />
					<HomeWall />
				</RightColumn>
			</HomeContainer>
		);
	}
}
