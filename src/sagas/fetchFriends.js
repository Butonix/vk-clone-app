import axios from 'axios';

import { call, put, takeEvery } from 'redux-saga/effects';
import requestedFriends from './../actions/Friends/RequestedFriends';
import requestedFriendsError from './../actions/Friends/RequestedFriendsError';
import requestedFriendsSuccess from './../actions/Friends/RequestedFriendsSucces';
import { FETCH_FRIENDS } from './../constants/Links';

function* watchFetchFriends() {
	yield takeEvery('FETCH_FRIENDS', fetchFriendsAsync);
}

function* fetchFriendsAsync() {
	try {
		yield put(requestedFriends());
		const data = yield call(() => {
			return axios.get(FETCH_FRIENDS).then(res => res.data);
		});

		yield put(requestedFriendsSuccess(data));
	} catch (error) {
		yield put(requestedFriendsError());
	}
}

export default watchFetchFriends;
