import axios from 'axios';

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import FetchNews from './../actions/News/FetchNews';
import RequstedNews from './../actions/News/RequstedNews';
import RequstedNewsError from './../actions/News/RequstedNewsError';
import RequstedNewsSucces from './../actions/News/RequstedNewsSucces';

import { FETCH_NEWS } from './../constants/Links';

function* watchFetchNews() {
	yield takeEvery('FETCH_NEWS', fetchNewsAsync);
}

function* fetchNewsAsync() {
	try {
		yield put(RequstedNews());
		const data = yield call(() => {
			return axios.get(FETCH_NEWS).then(res => res.data);
		});

		yield put(RequstedNewsSucces(data));
	} catch (error) {
		yield put(RequstedNewsError());
	}
}

export default watchFetchNews;
