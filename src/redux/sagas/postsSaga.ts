import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { Post } from "../../types/posts";
import { getPosts } from "../../api/posts";
import { POSTS_ERROR } from "../../constants/errors";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../actions/creators/posts";
import { FETCH_POSTS } from "../actions/constants";

export function* watchRequestPosts() {
  yield takeLatest(FETCH_POSTS, workerRequestPosts);
}

function* workerRequestPosts() {
  try {
    const response: AxiosResponse<Post[]> = yield call(getPosts);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(POSTS_ERROR));
  }
}
