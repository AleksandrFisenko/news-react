import { Post } from "../types/types";
import api from "./axios";


export const getPosts = () => {
  return api.get<Post[]>("posts");
}
