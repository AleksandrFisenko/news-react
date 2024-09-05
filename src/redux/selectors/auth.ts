import { RootState } from "../reducers/rootReducer";

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;

export const selectAuthData = (state: RootState) => state.auth.userData;
