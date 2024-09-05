import { TOKEN } from "../constants/keys";
import {
  LoginRequest,
  LoginResponce,
  Profile,
  RegisterRequest,
} from "../types/auth";

import api from "./axios";

export const auth = async (
  data: LoginRequest | RegisterRequest,
  url: string
): Promise<Profile> => {
  const response = await api.post<LoginResponce>(`/auth/${url}`, data);
  localStorage.setItem(TOKEN, response.data.token);
  return response.data.user;
};

export const getProfile = async (): Promise<Profile> => {
  const response = await api.get<Profile>("/auth/profile");
  return response.data;
};
