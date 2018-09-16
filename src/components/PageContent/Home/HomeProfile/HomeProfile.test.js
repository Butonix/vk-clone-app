import React from 'react';
import ReactDOM from 'react-dom';
import HomeProfile from './HomeProfile';

it('Profile component rendering', () => {
	const div = document.createElement('div');
	ReactDOM.render(<HomeProfile />, div);
	ReactDOM.unmountComponentAtNode(div);
});
