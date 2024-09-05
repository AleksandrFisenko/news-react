import {
  LoginRequest,
  Profile,
  RegisterRequest,
} from "../../../types/auth";
import {
  FETCH_AUTH,
  FETCH_AUTH_FAILURE,
  FETCH_AUTH_SUCCESS,
  OUT_AUTH,
} from "../constants";

export const fetchAuthRegistration = (request: RegisterRequest) => ({
  payload: request,
  type: FETCH_AUTH,
});

export const fetchAuthLogin = (request: LoginRequest) => ({
  payload: request,
  type: FETCH_AUTH,
});

export const fetchAuthProfile = () => ({
  payload: null,
  type: FETCH_AUTH,
});

export const fetchAuthSuccess = (userData: Profile) => ({
  type: FETCH_AUTH_SUCCESS,
  payload: userData,
});

export const fetchAuthFailure = (payload: string) => ({
  type: FETCH_AUTH_FAILURE,
  payload,
});

export const outAuth = () => ({
  type: OUT_AUTH,
});
