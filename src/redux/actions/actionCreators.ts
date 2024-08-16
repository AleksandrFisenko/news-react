import { Post } from "../../types/types";
import {
  FetchPostsAction,
  FetchPostsFailureAction,
  FetchPostsSuccessAction,
} from "../types/posts";

import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "./constants";

export const doFetchPosts = (): FetchPostsAction => ({ type: FETCH_POSTS });

export const doFetchPostsSuccess = (
  posts: Post[]
): FetchPostsSuccessAction => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const doFetchPostsFailure = (
  payload: string
): FetchPostsFailureAction => ({ type: FETCH_POSTS_FAILURE, payload });
