import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { createStore, combineReducers } from 'redux';
import { Provider }   from 'react-redux';
import  WallAddPost   from './reducers/WallAddPost';


const store = createStore(combineReducers({WallAddPost}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
