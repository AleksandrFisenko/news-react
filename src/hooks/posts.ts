import { useEffect, useState } from "react";
import { Post } from "../types/types";
import axios, { AxiosError } from "axios";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const fetchPosts = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<Post[]>("http://localhost:8080/posts");
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
