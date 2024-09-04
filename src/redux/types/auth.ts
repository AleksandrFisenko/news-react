import { Profile } from "../../types/auth";
import {
  FETCH_AUTH,
  FETCH_AUTH_FAILURE,
  FETCH_AUTH_SUCCESS,
  OUT_AUTH,
} from "../actions/constants";

export interface FetchAuth {
  type: typeof FETCH_AUTH;
}

export interface OutAuthAction {
  type: typeof OUT_AUTH;
}

export interface FetchAuthSuccessAction {
  type: typeof FETCH_AUTH_SUCCESS;
  payload: Profile;
}

export interface FetchAuthFailureAction {
  type: typeof FETCH_AUTH_FAILURE;
  payload: string;
}

export type AuthAction =
  | FetchAuth
  | FetchAuthSuccessAction
  | FetchAuthFailureAction
  | OutAuthAction;
