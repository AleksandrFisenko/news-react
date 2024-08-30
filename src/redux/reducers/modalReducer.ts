import { MODAL_OPEN, MODAL_CLOSE } from "../actions/constants";
import { ModalAction } from "../types/modal";

interface ModalState {
  isOpen: boolean;
  modalType: "login" | "register" | "image" | null;
  imageUrl?: string;
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
        imageUrl: action.payload.imageUrl,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
        modalType: null,
        imageUrl: undefined,
      };
    default:
      return state;
  }
};

export default modalsReducer;
