import {
  MODAL_TYPE_LOGIN,
  MODAL_TYPE_POST_CREATE,
  MODAL_TYPE_REGISTRATION,
} from "../actions/constants";
import { RootState } from "../reducers/rootReducer";

export const selectModalIsOpen = (state: RootState) => state.modals.isOpen;

export const selectModalIsRegistration = (state: RootState) =>
  state.modals.modalType === MODAL_TYPE_REGISTRATION;

export const selectModalIsLogin = (state: RootState) =>
  state.modals.modalType === MODAL_TYPE_LOGIN;

export const selectModalIsPostCreate = (state: RootState) =>
  state.modals.modalType === MODAL_TYPE_POST_CREATE;

export const selectModalType = (state: RootState) => state.modals.modalType;
