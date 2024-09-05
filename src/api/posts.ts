import { Post } from "../types/posts";

import api from "./axios";

export const getPosts = () => {
  return api.get<Post[]>("posts");
};
