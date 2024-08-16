import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "../actions/constants";
import { PostsAction, PostsState } from "../types/posts";

const initialState: PostsState = {
  posts: [],
  loading: false,
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
        loading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
