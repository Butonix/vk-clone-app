import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styled Components

import { PostChangeContent, PostChangeLink } from './HomeWallStyled';

export class PostChangeContentTemplate extends Component {
	render() {
		return (
			<PostChangeContent
				show={this.props.show}
				onMouseLeave={this.props.onMouseLeave}
			>
				<PostChangeLink>Редактировать</PostChangeLink>
				<PostChangeLink onClick={this.props.deletePost}>Удалить</PostChangeLink>
				<PostChangeLink>Выключить комментарии</PostChangeLink>
			</PostChangeContent>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostChangeContentTemplate);
