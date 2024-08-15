import { Post } from "../../types/types";

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE",
}

interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: Post[];
}

interface FetchPostsFailureAction {
  type: PostsActionTypes.FETCH_POSTS_FAILURE;
  payload: string;
}

export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;
