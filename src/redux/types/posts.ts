import { Post } from "../../types/posts";

import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "../actions/constants";

export interface FetchPostsAction {
  type: typeof FETCH_POSTS;
}

export interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: Post[];
}

export interface FetchPostsFailureAction {
  type: typeof FETCH_POSTS_FAILURE;
  payload: string;
}

export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;
