import axios from "axios";

import setupInterceptors from "./setupInterceptors";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptors(api);

export default api;
