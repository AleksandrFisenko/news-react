import { RootState } from "../reducers/rootReducer";

export const selectUserError = (state: RootState) => state.userPage.error;

export const selectUserPageIsLoading = (state: RootState) => state.userPage.isLoading;

export const selectUserPageData = (state: RootState) => state.userPage.user;
