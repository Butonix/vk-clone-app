import React, { Component } from 'react';

// Styled Components

import { GoUpText, GoUpContainer } from './GoUpStyled';

// React Components

import RenderIcon from './../RenderIcon';

//  Icons

import { ic_keyboard_arrow_up } from 'react-icons-kit/md/ic_keyboard_arrow_up';

const upArrowStyles = {
	color: '#466a94',
	cursor: 'pointer',
	marginTpo: '10px',
	position: 'relative',
	top: '10px',
	marginLeft: '10px',
	opacity: '.7',
};

export default class GoUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			goUpShow: false,
			documentScroll: '',
		};
	}
	componentDidMount() {
		window.onscroll = () => this.handleScroll();
	}

	handleScroll() {
		let scrollValue = document.documentElement.scrollTop;

		if (scrollValue > 0) {
			this.setState({
				documentScroll: document.documentElement.scrollTop,
			});
		}

		if (this.state.documentScroll > 100) {
			this.setState({
				goUpShow: true,
			});
		} else {
			this.setState({
				goUpShow: false,
			});
		}
	}

	handleClick(e) {
		document.documentElement.scrollTop = '0';
		this.setState({
			goUpShow: false,
			documentScroll: 0,
		});
	}

	render() {
		return (
			<GoUpContainer
				onClick={this.handleClick.bind(this)}
				show={this.state.goUpShow}
			>
				<GoUpText>Go Up</GoUpText>
				<RenderIcon
					icon={ic_keyboard_arrow_up}
					size="30"
					style={upArrowStyles}
					onClick={this.handleClick.bind(this)}
				/>
			</GoUpContainer>
		);
	}
}
