import { MODAL_OPEN, MODAL_CLOSE } from "../actions/constants";
import { ModalAction } from "../types/modal";

interface ModalState {
  isOpen: boolean;
  modalType: "login" | "register" | "image" | null;
}

const initialState: ModalState = {
  isOpen: false,
  modalType: null,
};

const modalsReducer = (
  state = initialState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        modalType: action.payload.modalType,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
        modalType: null,
      };
    default:
      return state;
  }
};

export default modalsReducer;
