import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { 
    createStore, 
    combineReducers, 
    applyMiddleware  }      from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger               from 'redux-logger';
import { Provider }         from 'react-redux';

import  WallAddPost         from './reducers/WallAddPost';
import Freinds              from './reducers/Freinds';


import  watchFetchFreinds from './sagas/fetchFreinds';



const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    combineReducers({ 
        WallAddPost,
        Freinds
    }),
    applyMiddleware(
        logger,
        sagaMiddleWare
    )
)

sagaMiddleWare.run(watchFetchFreinds);
   

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

