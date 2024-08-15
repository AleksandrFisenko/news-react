import { Dispatch } from "redux";
import { AxiosError } from "axios";

import { PostsAction, PostsActionTypes } from "../types/posts";
import instance from "../../api/axios";
import { Post } from "../../types/types";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POSTS });
      const response = await instance.get<Post[]>("posts");
      dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
    } catch (e) {
      const error = e as AxiosError;
      dispatch({
        type: PostsActionTypes.FETCH_POSTS_FAILURE,
        payload: error.message,
      });
    }
  };
};
