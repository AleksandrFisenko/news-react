import { fork } from "redux-saga/effects";

import { watchRequestPosts } from "./postsSaga";
import { ModalSaga } from "./modalSaga";
import { watchRequestAuth } from "./authSaga";

export default function* rootSaga() {
  yield fork(watchRequestPosts);
  yield fork(ModalSaga)
  yield fork(watchRequestAuth)
}
