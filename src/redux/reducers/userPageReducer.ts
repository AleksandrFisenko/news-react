import { UserPage } from "../../types/posts";
import {
  FETCH_USER_PAGE,
  FETCH_USER_PAGE_FAILURE,
  FETCH_USER_PAGE_SUCCESS,
} from "../actions/constants";
import { UserPageAction } from "../types/userPage";

interface UaerPageState {
  userPage: UserPage | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UaerPageState = {
  userPage: null,
  isLoading: false,
  error: null,
};

const userPageReducer = (
  state = initialState,
  action: UserPageAction
): UaerPageState => {
  switch (action.type) {
    case FETCH_USER_PAGE:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_USER_PAGE_SUCCESS:
      return {
        ...state,
        userPage: action.payload,
        isLoading: false,
      };
    case FETCH_USER_PAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userPageReducer;
