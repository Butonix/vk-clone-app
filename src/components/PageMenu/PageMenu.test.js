import React from 'react';
import ReactDOM from 'react-dom';
import PageMenu from './PageMenu';


it('Page Menu', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
