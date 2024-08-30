import { MODAL_CLOSE, MODAL_OPEN } from "../constants";

export const modalOpen = (modalType: "login" | "register" | "image") => ({
  type: MODAL_OPEN,
  payload: { modalType },
});

export const modalClose = () => ({
  type: MODAL_CLOSE,
});
