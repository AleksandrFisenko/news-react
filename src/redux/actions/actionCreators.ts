import { Post } from "../../types/types";

import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "./constants";

export const doFetchPosts = () => ({ type: FETCH_POSTS });

export const doFetchPostsSuccess = (posts: Post[]) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const doFetchPostsFailure = (payload: string) => ({
  type: FETCH_POSTS_FAILURE,
  payload,
});
