import {
  FETCH_AUTH,
  FETCH_AUTH_FAILURE,
  FETCH_AUTH_SUCCESS,
} from "../actions/constants";
import { AuthAction } from "../types/auth";

interface RegistrationState {
  isLoading: boolean;
  error: string | null;
}

const initialState: RegistrationState = {
  isLoading: false,
  error: null,
};

const postsReducer = (
  state = initialState,
  action: AuthAction
): RegistrationState => {
  switch (action.type) {
    case FETCH_AUTH:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_AUTH_SUCCESS:
      return {
        ...state,
        postList: action.payload,
        isLoading: false,
      };
    case FETCH_AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
