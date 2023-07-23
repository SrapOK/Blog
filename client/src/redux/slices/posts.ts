import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http";

type status = "pending" | "fulfilled" | "rejected";

interface postSliceInitialState {
  posts: {
    items: [];
    status: status;
  };
  tags: {
    items: [];
    status: status;
  };
}

const initialState: postSliceInitialState = {
  posts: {
    items: [],
    status: "pending"
  },
  tags: {
    items: [],
    status: "pending"
  }
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await $host.get("/posts");
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.posts.items = [];
        state.posts.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        if (action.payload) state.posts.items = action.payload;
        state.posts.status = "fulfilled";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.posts.items = [];
        state.posts.status = "rejected";
      });
  }
});

export const postsReducer = postsSlice.reducer;
