import {
  LoginRequest,
  LoginResponce,
  Profile,
  RegisterRequest,
} from "../types/auth";

import api from "./axios";

export const registration = (data: RegisterRequest) => {
  return api.post<LoginResponce>('/auth/registration', data);
};

export const login = (data: LoginRequest) => {
  return api.post<LoginResponce>('/auth/login', data);
};

export const getProfile = (token: string) => {
  return api.get<Profile>('/auth/profile', { headers: {"Authorization" : `Bearer ${token}`} });;
};
