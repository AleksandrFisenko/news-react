import { UserPage } from "../../../types/posts";
import {
  FETCH_USER_PAGE,
  FETCH_USER_PAGE_FAILURE,
  FETCH_USER_PAGE_SUCCESS,
} from "../constants";

export const fetchUserPage = (id: number) => ({
  type: FETCH_USER_PAGE,
  payload: id,
});

export const fetchUserPageSuccess = (userPage: UserPage) => ({
  type: FETCH_USER_PAGE_SUCCESS,
  payload: userPage,
});

export const fetchUserPageFailure = (payload: string) => ({
  type: FETCH_USER_PAGE_FAILURE,
  payload,
});
