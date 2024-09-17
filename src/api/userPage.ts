import { PostWithoutUser, User, UserPage } from "../types/posts";
import api from "./axios";

export const getUserPage = async (id: number): Promise<UserPage> => {
  try {
    const [userResponse, postsResponse] = await Promise.all([
      api.get<User>(`/users/${id}`),
      api.get<PostWithoutUser[]>(`/posts/user/${id}`),
    ]);

    const userPage: UserPage = {
      user: userResponse.data,
      posts: postsResponse.data,
    };
    return userPage;
  } catch (error) {
    throw error;
  }
};
