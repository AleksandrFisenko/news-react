import { Profile } from "../../types/auth";
import {
  FETCH_AUTH,
  FETCH_AUTH_FAILURE,
  FETCH_AUTH_SUCCESS,
  OUT_AUTH,
} from "../actions/constants";
import { AuthAction } from "../types/auth";

interface AuthState {
  userData: Profile | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  userData: null,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case FETCH_AUTH:
      return {
        ...state,
        userData: null,
        isLoading: true,
        error: null,
      };
    case FETCH_AUTH_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isLoading: false,
      };
    case FETCH_AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case OUT_AUTH:
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

export default authReducer;
