import React from 'react';

// Styled Components

import { FreindItem } from './HomeFriendsStyled';

const Friend = props => {
	if (props.freindPhoto) {
		return (
			<FreindItem freindPhoto={props.freindPhoto}>
				<div className="avatar" />
				<p>{props.name}</p>
			</FreindItem>
		);
	}
	return <FreindItem />;
};

export default Friend;
