export interface RegisterRequest {
  email: string;
  login: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface Profile {
  id: number;
  email: string;
  login: string;
  avatarUrl: string;
  updatedAt: string;
}

export interface LoginResponce {
  token: string;
  user: Profile;
}