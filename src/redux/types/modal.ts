import {
  MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_TYPE_REGISTRATION,
  MODAL_TYPE_LOGIN,
} from "../actions/constants";

export type ModalType =
  | typeof MODAL_TYPE_REGISTRATION
  | typeof MODAL_TYPE_LOGIN;

export interface ModalOpenAction {
  type: typeof MODAL_OPEN;
  payload: { modalType: ModalType };
}

export interface ModalCloseAction {
  type: typeof MODAL_CLOSE;
}

export type ModalAction = ModalOpenAction | ModalCloseAction;
