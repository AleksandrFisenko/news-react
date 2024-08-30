import { fork } from "redux-saga/effects";

import { watchRequestPosts } from "./postsSaga";
import { ModalSaga } from "./modalSaga";

export default function* rootSaga() {
  yield fork(watchRequestPosts);
  yield fork(ModalSaga)
}
