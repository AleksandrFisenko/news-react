import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosError, AxiosResponse } from "axios";

import { Post } from "../../types/types";
import {
  doFetchPostsFailure,
  doFetchPostsSuccess,
} from "../actions/actionCreators";

import { FETCH_POSTS } from "../actions/constants";
import { getPosts } from "../../api/posts";

export function* watchRequestPosts() {
  yield takeLatest(FETCH_POSTS, workerRequestPosts);
}

function* workerRequestPosts() {
  try {
    const response: AxiosResponse<Post[]> = yield call(getPosts);
    yield put(doFetchPostsSuccess(response.data));
  } catch (error) {
    yield put(doFetchPostsFailure((error as AxiosError).message));
  }
}
