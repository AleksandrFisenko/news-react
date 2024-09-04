import { MODAL_OPEN, MODAL_CLOSE } from "../actions/constants";

export type ModalType = "login" | "register";

export interface ModalOpenAction {
  type: typeof MODAL_OPEN;
  payload: { modalType: ModalType };
}

export interface ModalCloseAction {
  type: typeof MODAL_CLOSE;
}

export type ModalAction = ModalOpenAction | ModalCloseAction;
