import { Dispatch } from "redux";
import { AxiosError } from "axios";

import { PostsAction } from "../types/posts";
import instance from "../../api/axios";
import { Post } from "../../types/types";

import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "./constants";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({ type: FETCH_POSTS });
      const response = await instance.get<Post[]>("posts");
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (e) {
      const error = e as AxiosError;
      dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: error.message,
      });
    }
  };
};
