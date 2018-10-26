import React, { Component } from 'react';

import { Link } from 'react-router-dom';

//  Styled Components

import { 
		RightMenuContainer,
		RightMenuList,
		RightMenuListItem,
		RightMenuNestedList
} from './RightMenuStyled';




export default class RightMenu extends Component {
	render() {
		return (
			<RightMenuContainer>
				<RightMenuList>
					<Link to="/news/news-feed">
						<RightMenuListItem active={true}>
							News
						</RightMenuListItem>
					</Link>
					<RightMenuNestedList show={true}>
						<Link to="/news/news-photo"><RightMenuListItem>Photos</RightMenuListItem></Link>
						<RightMenuListItem>Videos</RightMenuListItem>
						<RightMenuListItem>Friends</RightMenuListItem>
						<RightMenuListItem>Communities</RightMenuListItem>
						<RightMenuListItem>Liked</RightMenuListItem>
						<RightMenuListItem>Podcasts</RightMenuListItem>
					</RightMenuNestedList>
					<RightMenuListItem>Suggestions</RightMenuListItem>
					<RightMenuListItem>Search</RightMenuListItem>
					<RightMenuListItem>Updates</RightMenuListItem>
					<RightMenuListItem>Comments</RightMenuListItem>
				</RightMenuList>
			</RightMenuContainer>
		);
	}
}
