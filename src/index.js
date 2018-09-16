import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { 
    createStore, 
    combineReducers, 
    applyMiddleware,
    compose   
}                               from 'redux';
import { composeWithDevTools }  from 'redux-devtools-extension';
import createSagaMiddleware     from 'redux-saga';
import { takeEvery, all }       from 'redux-saga/effects';
import logger                   from 'redux-logger';
import { Provider }             from 'react-redux';

// Reducers
import  WallAddPost             from './reducers/WallAddPost';
import Freinds                  from './reducers/Freinds';
import Photos                   from './reducers/Photos';
import rootReducer              from './reducers/rootReducer'


import  watchFetchFreinds from './sagas/fetchFreinds';
import  watchFetchPhotos  from './sagas/fetchPhotos';


const sagaMiddleWare = createSagaMiddleware();

const store = createStore( 
    combineReducers({ 
        rootReducer,
        WallAddPost,
        Freinds,
        Photos
    }),
    composeWithDevTools(
     applyMiddleware( 
        logger,
        sagaMiddleWare
     ),  
  ));

function* rootSaga() {
    yield all([
        watchFetchPhotos(),
        watchFetchFreinds(),
    ])
  }

sagaMiddleWare.run(rootSaga);

   

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

