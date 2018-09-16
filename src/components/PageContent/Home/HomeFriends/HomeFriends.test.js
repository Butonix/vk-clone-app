import React from 'react';
import ReactDOM from 'react-dom';
import HomeFriends from './HomeFriends';

it('HomePhotos component rendering', () => {
	const div = document.createElement('div');
	ReactDOM.render(<HomeFriends />, div);
	ReactDOM.unmountComponentAtNode(div);
});
