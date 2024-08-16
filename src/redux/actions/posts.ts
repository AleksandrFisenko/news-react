import { Dispatch } from "redux";

import { PostsAction } from "../types/posts";

import { doFetchPosts } from "./actionCreators";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    dispatch(doFetchPosts());
  };
};
