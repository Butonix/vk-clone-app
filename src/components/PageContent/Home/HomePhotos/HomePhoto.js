import React from 'react';
import { PhotoItem } from './HomePhotosStyled';

const HomePhoto = props => {
	return (
		<PhotoItem
			href="#"
			style={{ backgroundImage: 'url(' + props.imgUrl + ')' }}
			onClick={props.onClick}
			{...props}
		/>
	);
};

export default HomePhoto;
