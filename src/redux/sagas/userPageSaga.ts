import { AxiosError } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { UserPage } from "../../types/posts";
import { getUserPage } from "../../api/userPage";
import { FETCH_USER_PAGE } from "../actions/constants";
import {
  fetchUserPageFailure,
  fetchUserPageSuccess,
} from "../actions/creators/user";
import { FetchUserPageAction } from "../types/userPage";

export function* watchRequestUserPage() {
  yield takeLatest(FETCH_USER_PAGE, workerRequestUserPage);
}

function* workerRequestUserPage(action: FetchUserPageAction) {
  try {
    const response: UserPage = yield call(getUserPage, action.payload);
    yield put(fetchUserPageSuccess(response));
  } catch (error) {
    yield put(fetchUserPageFailure((error as AxiosError).message));
  }
}
