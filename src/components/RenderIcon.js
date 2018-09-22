import React from 'react';
import { withBaseIcon } from 'react-icons-kit';

const RenderIcon = props => {
	const SideIconContainer = withBaseIcon({
		size: props.size,
		style: props.style,
	});
	return (
		<SideIconContainer
			icon={props.icon}
			onClick={props.onClick}
			className={props.className}
		/>
	);
};

export default RenderIcon;
