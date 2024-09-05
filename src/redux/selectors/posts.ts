import { RootState } from "../reducers/rootReducer";

export const selectPostsError = (state: RootState) => state.posts.error;

export const selectPostsIsLoading = (state: RootState) => state.posts.isLoading;

export const selectPostsData = (state: RootState) => state.posts.postList;
