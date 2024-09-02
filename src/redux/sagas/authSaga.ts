import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosError } from "axios";

import { LoginRequest, LoginResponce, RegisterRequest } from "../../types/auth";
import { login, registration } from "../../api/auth";
import {
  fetchAuthFailure,
  fetchAuthSuccess,
} from "../actions/creators/authActionCreators";
import { FETCH_AUTH } from "../actions/constants";

export function* watchRequestAuth() {
  yield takeLatest(FETCH_AUTH, workerRequestAuth);
}

interface Action {
  payload: RegisterRequest | LoginRequest;
  type: string;
}

function* workerRequestAuth(action: Action) {
  try {
    let response: LoginResponce;

    if ((action.payload as RegisterRequest).login) {
      console.log(action.payload)
      response = yield call(registration, action.payload as RegisterRequest);
      console.log(response)
    } else {
      response = yield call(login, action.payload as LoginRequest);
    }
    yield put(fetchAuthSuccess(response));
  } catch (error) {
    console.log((error as AxiosError).message)
    yield put(fetchAuthFailure((error as AxiosError).message));
  }
}
