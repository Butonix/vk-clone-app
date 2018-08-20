import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';


it('Profile component rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
