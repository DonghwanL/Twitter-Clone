import { all, fork, put, takeLatest, delay, throttle } from 'redux-saga/effects';
import axios from 'axios';
import shortId from 'shortid';
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  generateDummyPost,
} from '../reducers/post'
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';


function loadPostAPI(data) {
  return axios.get('/api/posts', data);
}

function* loadPost(action) {
  try {
    yield delay(1000);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: generateDummyPost(10),
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id, // user Reducer를 통해서 ID를 전달
    })
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.delete('/api/post', data);
}

function* removePost(action) {
  try {
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    })
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  return axios.post('/api/post/${data.postId}/comment', data);
}

function* addComment(action) {
  try {
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    })
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    })
  }
}

function* watchLoadPost() {
  yield throttle(5000, LOAD_POST_REQUEST, loadPost) // 
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost)
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}


export default function* PostSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadPost),
    fork(watchRemovePost),
    fork(watchAddComment),
  ])
}