import React from 'react';
import { withBaseIcon } from 'react-icons-kit';
import { smileO } from 'react-icons-kit/fa/smileO';

import { AddSmileContainer } from './AddWallStyled';

const SideIconContainer = withBaseIcon({
	size: 20,
	style: {
		color: '#4a76a8',
		cursor: 'pointer',
		width: '40px',
		height: '40px',
		opacity: '.7',
	},
});

const AddSmile = props => {
	return (
		<AddSmileContainer>
			<SideIconContainer icon={smileO} />
		</AddSmileContainer>
	);
};

export default AddSmile;
