import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import { store } from "../store";

export const rootReducer = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
