import { posts } from "../../data/posts";
import { PostsAction, PostsActionTypes, PostsState } from "../types/posts";

const initialState: PostsState = {
  posts: posts,
  loading: false,
  error: null,
};

const postsReducer = (
  state = initialState,
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case PostsActionTypes.FETCH_POSTS_FAILURE:
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
