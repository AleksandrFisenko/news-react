import { combineReducers } from "redux";

import { store } from "../store";

import postsReducer from "./postsReducer";
import modalsReducer from "./modalReducer";
import authReducer from "./authReducer";
import userPageReducer from "./userPageReducer";
import { createPostSlice } from "../slices/createPostSlice";

export const rootReducer = combineReducers({
  posts: postsReducer,
  modals: modalsReducer,
  auth: authReducer,
  userPage: userPageReducer,
  createPost: createPostSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
