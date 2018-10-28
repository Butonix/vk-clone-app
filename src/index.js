import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, all } from 'redux-saga/effects';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Reducers
import WallAddPost from './reducers/WallAddPost';
import Friends from './reducers/Friends';
import Photos from './reducers/Photos';
import rootReducer from './reducers/rootReducer';
import PhotoComments from './reducers/PhotoComments';
import News from './reducers/News';

// Sagas
import watchFetchFriends from './sagas/fetchFriends';
import watchFetchPhotos from './sagas/fetchPhotos';
import watchFetchNews from './sagas/fetchNews';

import { registerObserver } from 'react-perf-devtool';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
	combineReducers({
		rootReducer,
		WallAddPost,
		Friends,
		Photos,
		PhotoComments,
		News,
	}),
	composeWithDevTools(applyMiddleware(logger, sagaMiddleWare))
);

function* rootSaga() {
	yield all([watchFetchPhotos(), watchFetchFriends(), watchFetchNews()]);
}

sagaMiddleWare.run(rootSaga);
registerObserver();

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
