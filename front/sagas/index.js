import { all, fork, call, put, takeLatest, delay } from 'redux-saga/effects'
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data)
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data)
    yield delay(1000);
    yield put({
      type:'LOG_IN_SUCCESS',
      data: result.data
    });
  } catch (error) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: error.response.data,
    })l
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest('LOG_IN_REQUEST', logIn)
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut)
}

function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST')
}

export default function* rootSaga() {
  yield all([
    fork(watchLogin), 
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}