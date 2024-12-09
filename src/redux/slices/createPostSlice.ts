import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { CreatePost, Post } from "../../types/posts";
import { createPost } from "../../api/posts";

interface CreatePostState {
  post: Post | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CreatePostState = {
  post: null,
  isLoading: false,
  error: null,
};

export const createPostThunk = createAsyncThunk<
  Post,
  CreatePost,
  { rejectValue: string }
>("posts/create", async (postData, { rejectWithValue })=> {
  try {
    return await createPost(postData);
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

export const createPostSlice = createSlice({
  name: "posts/create",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPostThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(createPostThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || null;
      });
  },
});
