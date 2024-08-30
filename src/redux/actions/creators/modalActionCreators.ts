import { MODAL_CLOSE, MODAL_OPEN } from "../constants";

export const modalOpen = (modalType: "login" | "register" | "image", imageUrl?: string) => ({
  type: MODAL_OPEN,
  payload: { modalType, imageUrl },
});

export const modalClose = () => ({
  type: MODAL_CLOSE,
});
