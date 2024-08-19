import { fork } from "redux-saga/effects";

import { watchRequestPosts } from "./postsSaga";

export default function* rootSaga() {
  yield fork(watchRequestPosts);
}
