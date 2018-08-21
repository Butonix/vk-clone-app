import React from 'react';
import ReactDOM from 'react-dom';
import HomeInfo from './HomeInfo';


it('HomeInfo component rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});