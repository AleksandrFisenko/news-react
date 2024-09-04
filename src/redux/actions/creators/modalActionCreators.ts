import { ModalType } from "../../types/modal";
import { MODAL_CLOSE, MODAL_OPEN } from "../constants";

export const modalOpen = (modalType: ModalType,) => ({
  type: MODAL_OPEN,
  payload: { modalType },
});

export const modalClose = () => ({
  type: MODAL_CLOSE,
});
