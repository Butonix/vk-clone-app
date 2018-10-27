import React, { Component } from 'react';
import { withBaseIcon } from 'react-icons-kit';
import { Link } from 'react-router-dom';

import { ListContainer, PageMenuContainer, List } from './PageMenuStyled';

const SideIconContainer = withBaseIcon({
	size: 16,
	style: {
		color: '#4a76a8',
		cursor: 'pointer',
		width: '30px',
		height: '30px',
		opacity: '.7',
		paddingRight: '5px',
	},
});

export default class PageMenu extends Component {
	render() {
		return (
			<PageMenuContainer>
				<ListContainer>
					<List>
						<Link to="/">
							<span>My profile</span>
						</Link>
					</List>
					<List>
						<Link to="/news/news-feed">
							<span>News</span>
						</Link>
					</List>
					<List>
						<Link to="">
							<span>Messages</span>
						</Link>
					</List>
					<List>
						<Link to="/friends">
							<span>Friends</span>
						</Link>
					</List>
					<List>
						<Link to="">
							<span>Communities</span>
						</Link>
					</List>
					<List>
						<Link to="">
							<span>Photos</span>
						</Link>
					</List>
					<List>
						<Link to="">
							<span>Music</span>
						</Link>
					</List>
					<List>
						<Link to="">
							<span>Videos</span>
						</Link>
					</List>
				</ListContainer>
			</PageMenuContainer>
		);
	}
}
