import { Post } from "../types/common";

import api from "./axios";

export const getPosts = () => {
  return api.get<Post[]>("posts");
};
