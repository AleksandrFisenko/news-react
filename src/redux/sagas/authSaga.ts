import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosError } from "axios";

import { Profile } from "../../types/auth";
import { auth, getProfile } from "../../api/auth";
import { TOKEN } from "../../constants/keys";
import isRegisterRequest from "../../utils/payloadGuard";
import { fetchAuthFailure, fetchAuthSuccess } from "../actions/creators/auth";
import { FETCH_AUTH, OUT_AUTH } from "../actions/constants";
import { FetchAuth } from "../types/auth";

export function* watchRequestAuth() {
  yield takeLatest(FETCH_AUTH, workerRequestAuth);
  yield takeLatest(OUT_AUTH, workerOutAuth);
}

function* workerOutAuth() {
  localStorage.removeItem(TOKEN);
  yield;
}

function* workerRequestAuth(action: FetchAuth) {
  try {
    let response: Profile;
    if (action.payload === null) {
      response = yield call(getProfile);
    } else if (isRegisterRequest(action.payload)) {
      response = yield call(auth, action.payload, "registration");
    } else {
      response = yield call(auth, action.payload, "login");
    }
    yield put(fetchAuthSuccess(response));
  } catch (error) {
    yield put(fetchAuthFailure((error as AxiosError).message));
  }
}
