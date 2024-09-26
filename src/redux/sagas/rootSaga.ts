import { fork } from "redux-saga/effects";

import { watchRequestPosts } from "./postsSaga";
import { watchRequestAuth } from "./authSaga";
import { watchRequestUserPage } from "./userPageSaga";

export default function* rootSaga() {
  yield fork(watchRequestPosts);
  yield fork(watchRequestAuth);
  yield fork(watchRequestUserPage);
}
