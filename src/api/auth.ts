import { headers } from "../constants/common";
import {
  LoginRequest,
  LoginResponce,
  Profile,
  RegisterRequest,
} from "../types/auth";

import api from "./axios";

export const registration = (data: RegisterRequest) => {
  return api.post<LoginResponce>('/registration', data, headers);
};

export const login = (data: LoginRequest) => {
  return api.post<LoginResponce>('/registration', data, headers);
};

export const profile = (token: string) => {
  return api.get<Profile>('/registration', { headers: {"Authorization" : `Bearer ${token}`} });;
};
