import { User } from "../../types/posts";
import {
  FETCH_USER_PAGE,
  FETCH_USER_PAGE_FAILURE,
  FETCH_USER_PAGE_SUCCESS,
} from "../actions/constants";

export interface FetchUserPageAction {
  type: typeof FETCH_USER_PAGE;
  payload: number;
}

export interface FetchUserPageSuccessAction {
  type: typeof FETCH_USER_PAGE_SUCCESS;
  payload: User | null;
}

export interface FetchUserPageFailureAction {
  type: typeof FETCH_USER_PAGE_FAILURE;
  payload: string;
}

export type UserPageAction =
  | FetchUserPageAction
  | FetchUserPageSuccessAction
  | FetchUserPageFailureAction;
