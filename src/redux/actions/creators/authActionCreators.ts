import {
  LoginRequest,
  LoginResponce,
  RegisterRequest,
} from "../../../types/auth";
import {
  FETCH_AUTH,
  FETCH_AUTH_FAILURE,
  FETCH_AUTH_SUCCESS,
} from "../constants";

export const fetchAuth = (request: RegisterRequest | LoginRequest) => ({
  payload: request,
  type: FETCH_AUTH,
});

export const fetchAuthSuccess = (userData: LoginResponce) => ({
  type: FETCH_AUTH_SUCCESS,
  payload: userData,
});

export const fetchAuthFailure = (payload: string) => ({
  type: FETCH_AUTH_FAILURE,
  payload,
});
