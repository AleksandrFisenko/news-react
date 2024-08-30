import { Post } from "../../../types/posts";

import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "../constants";

export const fetchPosts = () => ({ type: FETCH_POSTS });

export const fetchPostsSuccess = (posts: Post[]) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (payload: string) => ({
  type: FETCH_POSTS_FAILURE,
  payload,
});
