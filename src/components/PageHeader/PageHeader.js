import React, { Component } from 'react';
import styled from 'styled-components';
import PageHeaderLogo from './PageHeaderLogo';
import PageHeaderSearch from './PageHeaderSearch';
import PageHeaderBell from './PageHeaderBell';
import PageHeaderProfile from './PageHeaderProfile';

import { Container } from './../StyledComponents';

const Header = styled.div`
	background: #4a76a8;
	position: fixed;
	z-index: 5;
	width: 100%;
`;

export default class PageHeader extends Component {
	render() {
		return (
			<Header>
				<Container>
					<PageHeaderLogo
						alt="vk-logo"
						src="/images/vk-logo.svg"
						title="vk-logo"
					/>
					<PageHeaderSearch />
					<PageHeaderBell />
					<PageHeaderProfile />
				</Container>
			</Header>
		);
	}
}
