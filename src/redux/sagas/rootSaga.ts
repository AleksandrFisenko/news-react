import { fork } from "redux-saga/effects";

import { watchRequestPosts } from "./postsSaga";
import { watchRequestAuth } from "./authSaga";

export default function* rootSaga() {
  yield fork(watchRequestPosts);
  yield fork(watchRequestAuth)
}
