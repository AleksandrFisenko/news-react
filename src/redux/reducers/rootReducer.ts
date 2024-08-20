import { combineReducers } from "redux";

import { store } from "../store";

import postsReducer from "./postsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
