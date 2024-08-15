import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import { Post } from "../../types/types"; 

import instance from "./axios";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const fetchPosts = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await instance.get<Post[]>("posts"); //env
      setPosts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error };
}
