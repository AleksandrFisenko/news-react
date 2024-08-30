import { combineReducers } from "redux";

import { store } from "../store";

import postsReducer from "./postsReducer";
import modalsReducer from "./modalReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  modals: modalsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
