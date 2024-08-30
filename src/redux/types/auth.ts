import { LoginResponce } from "../../types/auth";

import {
  FETCH_AUTH,
  FETCH_AUTH_FAILURE,
  FETCH_AUTH_SUCCESS,
} from "../actions/constants";

export interface FetchAuthAction {
  type: typeof FETCH_AUTH;
}

export interface FetchAuthSuccessAction {
  type: typeof FETCH_AUTH_SUCCESS;
  payload: LoginResponce;
}

export interface FetchAuthFailureAction {
  type: typeof FETCH_AUTH_FAILURE;
  payload: string;
}

export type AuthAction =
  | FetchAuthAction
  | FetchAuthSuccessAction
  | FetchAuthFailureAction;
