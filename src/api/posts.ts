import { AxiosError } from "axios";
import { CreatePost, Post } from "../types/posts";

import api from "./axios";

export const getPosts = () => {
  return api.get<Post[]>("posts");
};

export const createPost = async (post: CreatePost) => {
  const formData = new FormData();
  formData.append("title", post.title);
  formData.append("text", post.text);
  // formData.append("tags", JSON.stringify(post.tags));
  post.tags.forEach(tag => {
    formData.append("tags", tag.toString())
  })
  formData.append("file", post.image);
  console.log(formData);

  for (let pair of formData.entries()) {
    console.log(pair[0], pair[1]);
  }

  try {
    const response = await api.post<Post>("posts", formData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Server Error:", error.response?.data);
    } else {
      console.error("Unexpected Error:", error);
    }
    throw error;
  }
};
