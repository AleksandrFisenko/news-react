import { Post } from "../../types/posts";
import { PostsAction } from "../types/posts";
import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "../actions/constants";

interface PostsState {
  postList: Post[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  postList: [],
  isLoading: false,
  error: null,
};

const postsReducer = (
  state = initialState,
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        isLoading: true,
        error: null,
        postList: [],
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postList: action.payload,
        isLoading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
