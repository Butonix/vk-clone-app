import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styled Components

import { ListContainer, PageMenuContainer, List, PageMenuIcon } from './PageMenuStyled';

export default class PageMenu extends Component {
	render() {
		return (
			<PageMenuContainer>
				<ListContainer>
					<List>
						<Link to="/Vk-clone">
							<span>My profile</span>
						</Link>
					</List>
					<List>
						<Link to="/Vk-clone/news/news-feed">
							<span>News</span>
						</Link>
					</List>
					<List>
						<Link to="">
							<span>Messages</span>
						</Link>
					</List>
					<List>
						<Link to="/Vk-clone/friends">
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
