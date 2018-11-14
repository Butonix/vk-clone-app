import React, { Component, Fragment } from 'react';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';

// React Components

import RenderIcon from './../RenderIcon';

import {
	PagePaginationContainer,
	NavigationLink,
	NavigationLinkActive,
} from './PagePaginationStyled';

const nextArrayIcon = {
	color: '#4a76a8',
	cursor: 'pointer',
	width: '25px',
	height: '25px',
	opacity: '.8 ',
};

export default class PagePagination extends Component {
	render() {
		if (this.props.toRoutArray) {
			const toRoutArray = this.props.toRoutArray;
			return (
				<PagePaginationContainer>
					{toRoutArray.map((item, index, array) => {
						if (item !== array[array.length - 1]) {
							let currentLink = item !== array[array.length - 1] ? item : '';
							return (
								<Fragment key={index}>
									<NavigationLink>{currentLink}</NavigationLink>
									<RenderIcon
										icon={ic_keyboard_arrow_right}
										size="20"
										style={nextArrayIcon}
									/>
								</Fragment>
							);
						}
					})}
					<NavigationLinkActive>
						{toRoutArray[toRoutArray.length - 1]}
					</NavigationLinkActive>
				</PagePaginationContainer>
			);
		}

		return '';
	}
}
