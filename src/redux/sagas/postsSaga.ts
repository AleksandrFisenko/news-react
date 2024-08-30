import { 
  call,
  put,
  takeLatest
} from "redux-saga/effects";
import { AxiosError, AxiosResponse } from "axios";

import { Post } from "../../types/posts";

import { fetchPostsFailure, fetchPostsSuccess } from "../actions/creators/postsActionCreators";
import { FETCH_POSTS } from "../actions/constants";
import { getPosts } from "../../api/posts";

export function* watchRequestPosts() {
  yield takeLatest(FETCH_POSTS, workerRequestPosts);
}

function* workerRequestPosts() {
  try {
    const response: AxiosResponse<Post[]> = yield call(getPosts);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure((error as AxiosError).message));
  }
}
