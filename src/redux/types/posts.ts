import { Post } from "../../types/types";
import { FETCH_POSTS, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from "../actions/constants";

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

interface FetchPostsAction {
  type: typeof FETCH_POSTS;
}

interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: Post[];
}

interface FetchPostsFailureAction {
  type: typeof FETCH_POSTS_FAILURE;
  payload: string;
}

export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;
