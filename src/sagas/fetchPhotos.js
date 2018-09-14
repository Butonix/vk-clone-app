import axios from 'axios';

import { call,
         put,
         takeEvery,
         takeLatest }          from 'redux-saga/effects';

import FetchPhotos          from './../actions/Photos/FetchPhotos';
import RequstedPhotos       from './../actions/Photos/RequstedPhotos';
import RequstedPhotosError  from './../actions/Photos/RequstedPhotosError';
import RequstedPhotosSucces from './../actions/Photos/RequstedPhotosSucces';

import { FETCH_PHOTOS } from './../constants/Links';



function* watchFetchPhotos () {
    yield takeEvery('FETCH_PHOTOS', fetchPhotosAsync)
}

function* fetchPhotosAsync () {
    try {
        yield put(RequstedPhotos());
        const data = yield call(() => {
            return axios.get(FETCH_PHOTOS).then(res => res.data)}
          );
       
        yield put(RequstedPhotosSucces(data))
    } catch (error) {
        yield put(RequstedPhotosError())   
    }
   
}

export default watchFetchPhotos;