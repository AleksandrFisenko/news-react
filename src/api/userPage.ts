import { Post, User } from "../types/posts";

import api from "./axios";

export const getUserById = async (id: number): Promise<User> => {
  const user = await api.get<User>(`/users/${id}`);
  return user.data;
};

export const getPostsByUserId = async (id: number): Promise<Post[]> => {
  const posts = await api.get<Post[]>(`/posts`, {
    params: {
      author: id,
    },
  });
  return posts.data;
};
