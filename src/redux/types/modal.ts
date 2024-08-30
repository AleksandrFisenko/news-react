import { MODAL_OPEN, MODAL_CLOSE } from "../actions/constants";

export interface ModalOpenAction {
  type: typeof MODAL_OPEN;
  payload: { modalType: "login" | "register" | "image" };
}

export interface ModalCloseAction {
  type: typeof MODAL_CLOSE;
}

export type ModalAction = ModalOpenAction | ModalCloseAction;
