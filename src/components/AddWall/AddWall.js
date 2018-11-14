import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// React Components

import AddIcons from './AddIcons';
import AddSmile from './AddSmile';
import { Button } from './../UI/Button';

// Styled components

import {
	HomeWallContainer,
	WallProfile,
	WallAddText,
	AddPanel,
	AddTitle,
	SendAdd,
} from './AddWallStyled';

// Icons

import { withBaseIcon } from 'react-icons-kit';
import { ic_settings } from 'react-icons-kit/md/ic_settings';

// Actions

import AddWallPost from './../../actions/AddWallPost';

const SideIconContainer = withBaseIcon({
	size: 16,
	style: {
		color: '#4a76a8',
		cursor: 'pointer',
		width: '30px',
		height: '30px',
		opacity: '.7',
	},
});

export class AddWall extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			addIconsShow: true,
			addPanelShow: false,
			postText: '',
			textSize: false,
		};
	}
	componentWillMount() {
		document.addEventListener('mousedown', this.outSideClick, false);
	}
	componentWillUnmount() {
		document.removeEventListener('mousedown', this.outSideClick, false);
	}

	outSideClick = e => {
		if (!this.modal.contains(e.target)) {
			if (this.state.addPanelShow) {
				this.setState({
					addPanelShow: false,
					addIconsShow: true,
					textSize: false,
				});
			}
			return;
		}
	};
	handleChange(e) {
		this.setState({
			postText: e.target.value,
		});
	}

	handleClick(e) {
		this.setState({
			addIconsShow: false,
			addPanelShow: true,
			textSize: true,
		});
	}
	handleAddClick(e) {
		const text = this.state.postText;
		if (text.length) {
			this.props.addPost({
				id: Date.now().toString(),
				text,
			});
			this.addText.value = '';
		}
	}

	render() {
		return (
			<HomeWallContainer ref={node => (this.modal = node)}>
				<AddTitle>
					<WallProfile back="./images/profile.jpg" />
					<WallAddText
						textSize={this.state.textSize}
						name="text"
						autoComplete="none"
						placeholder="Whats`s new?"
						value={this.state.postText}
						onClick={this.handleClick.bind(this)}
						onChange={this.handleChange.bind(this)}
						ref={node => (this.addText = node)}
					/>
					{this.state.addIconsShow ? <AddIcons /> : <AddSmile />}
				</AddTitle>
				{this.state.addPanelShow ? (
					<AddPanel style={{ display: `${this.state.addPanelShow}` }}>
						<AddIcons />
						<SendAdd>
							<SideIconContainer icon={ic_settings} />
							<Button onClick={this.handleAddClick.bind(this)}>
								{' '}
								Отправить{' '}
							</Button>
						</SendAdd>
					</AddPanel>
				) : (
					<div />
				)}
			</HomeWallContainer>
		);
	}
}

const mapStateToProps = state => ({
	vall: state.WallAddPost.vall,
});

const mapDispatchToProps = (dispacth, props) => ({
	addPost: post => {
		dispacth(AddWallPost(post));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddWall);
