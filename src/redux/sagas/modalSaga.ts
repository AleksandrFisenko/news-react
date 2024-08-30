import { takeLatest } from "redux-saga/effects";

import { MODAL_OPEN, MODAL_CLOSE } from "../actions/constants";

function* openModalSaga() {
  yield
}

function* closeModalSaga() {
  yield
}

export function* ModalSaga() {
  yield takeLatest(MODAL_OPEN, openModalSaga);
  yield takeLatest(MODAL_CLOSE, closeModalSaga);
}
