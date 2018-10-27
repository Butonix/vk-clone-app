import React, { Component } from 'react';
import styled from 'styled-components';

export const NoResults = styled.div`
	animation: top 0.4s ease-in-out;
	background: #fff;
	border-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
	padding: 15px 20px;
	margin: 10px 0 10px 0px;
	p {
		font-size: 14px;
		color: #555;
		line-height: 1.5em;
	}
`;

export default class SearchNotFound extends Component {
	render() {
		return (
			<NoResults>
				<p>Nothing was found on the request of {this.props.searchText} </p>
			</NoResults>
		);
	}
}
