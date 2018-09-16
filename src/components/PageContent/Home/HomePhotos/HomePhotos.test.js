import React from 'react';
import ReactDOM from 'react-dom';
import HomePhotos from './HomePhotos';

it('HomePhotos component rendering', () => {
	const div = document.createElement('div');
	ReactDOM.render(<HomePhotos />, div);
	ReactDOM.unmountComponentAtNode(div);
});
