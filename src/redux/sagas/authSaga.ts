import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosError } from "axios";

import { LoginRequest, Profile, RegisterRequest } from "../../types/auth";
import { auth, getProfile } from "../../api/auth";
import {
  fetchAuthFailure,
  fetchAuthSuccess,
} from "../actions/creators/authActionCreators";
import { FETCH_AUTH } from "../actions/constants";

export function* watchRequestAuth() {
  yield takeLatest(FETCH_AUTH, workerRequestAuth);
}

interface Action {
  payload: RegisterRequest | LoginRequest | null;
  type: string;
}

function* workerRequestAuth(action: Action) {
  try {
    let response: Profile;
    if (action.payload === null) {
      response = yield call(getProfile);
    } else if ("login" in action.payload) {
      response = yield call(auth, action.payload, "registration");
    } else {
      response = yield call(auth, action.payload, "login");
    }
    yield put(fetchAuthSuccess(response));
  } catch (error) {
    yield put(fetchAuthFailure((error as AxiosError).message));
  }
}
