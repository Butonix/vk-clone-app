import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { Provider }   from 'react-redux';
import  WallAddPost   from './reducers/WallAddPost';

import logger from 'redux-logger';

const store = createStore(combineReducers({ WallAddPost}),applyMiddleware(logger))
   
   

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

