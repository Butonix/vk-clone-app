import React, { Component } from 'react';
import { withBaseIcon } from 'react-icons-kit';
import { bell } from 'react-icons-kit/fa/bell';
import styled from 'styled-components';

const BellContainer = styled.div`
	padding: 12px 20px;
	margin-left: 20px;
	cursor: pointer;
	&:hover {
		background: #3d6898;
		transition: all 0.3s;
	}
`;

const SideIconContainer = withBaseIcon({
	size: 18,
	style: {
		color: '#003153',
	},
});

export default class PageHeaderBell extends Component {
	render() {
		return (
			<BellContainer>
				<SideIconContainer icon={bell} />
			</BellContainer>
		);
	}
}
