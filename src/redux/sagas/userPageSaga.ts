import { call, put, takeLatest } from "redux-saga/effects";

import { Post, User } from "../../types/posts";
import { getPostsByUserId, getUserById } from "../../api/userPage";
import { POSTS_ERROR, USER_ERROR } from "../../constants/errors";
import { FETCH_USER_PAGE } from "../actions/constants";
import {
  fetchUserPageFailure,
  fetchUserPageSuccess,
} from "../actions/creators/userPage";
import { FetchUserPageAction } from "../types/userPage";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../actions/creators/posts";

export function* watchRequestUserPage() {
  yield takeLatest(FETCH_USER_PAGE, workerRequestUserPage);
}

function* workerRequestUserPage(action: FetchUserPageAction) {
  try {
    const user: User = yield call(getUserById, action.payload);
    yield put(fetchUserPageSuccess(user));
  } catch (error) {
    yield put(fetchUserPageFailure(USER_ERROR));
  }

  try {
    const posts: Post[] = yield call(getPostsByUserId, action.payload);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(POSTS_ERROR));
  }
}
