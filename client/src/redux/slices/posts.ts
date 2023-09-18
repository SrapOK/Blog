import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { POSTS_ROUTE } from "../../utils/consts";
import { fetchTagsApi } from "../../http/TagsAPI";
import { fetchPostsApi, removePostApi } from "../../http/PostsAPI";
import { IPostFilterOptions } from "./filter";

type status = "pending" | "fulfilled" | "rejected";

interface IPostSliceInitialState {
  posts: {
    items: any[];
    status: status;
  };
  tags: {
    items: any[];
    status: status;
  };
}

const initialState: IPostSliceInitialState = {
  posts: {
    items: [],
    status: "pending"
  },
  tags: {
    items: [],
    status: "pending"
  }
};

export const fetchRemovePost = createAsyncThunk(
  `${POSTS_ROUTE}/fetchRemovePost`,
  removePostApi
);

export const fetchPosts = createAsyncThunk(
  `${POSTS_ROUTE}/fetchPosts`,
  async ({ tag, sort, search }: IPostFilterOptions) => {
    const data = fetchPostsApi(tag, sort, search);
    return data;
  }
);

export const fetchTags = createAsyncThunk(
  `${POSTS_ROUTE}/fetchTags`,
  fetchTagsApi
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //posts
      .addCase(fetchPosts.pending, (state) => {
        state.posts.items = [];
        state.posts.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        if (action.payload) state.posts.items = action.payload;
        state.posts.status = "fulfilled";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.posts.items = [];
        state.posts.status = "rejected";
      })
      //tags
      .addCase(fetchTags.pending, (state) => {
        state.tags.items = [];
        state.tags.status = "pending";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        if (action.payload) state.tags.items = action.payload;
        state.tags.status = "fulfilled";
      })
      .addCase(fetchTags.rejected, (state) => {
        state.tags.items = [];
        state.tags.status = "rejected";
      })
      //Удаление
      .addCase(fetchRemovePost.pending, (state) => {
        state.posts.status = "pending";
      })
      .addCase(fetchRemovePost.fulfilled, (state, action) => {
        if (action.payload) {
          state.posts.items = state.posts.items.filter(
            (obj) => obj._id !== action.payload
          );
          state.posts.status = "fulfilled";
        }
      });
  }
});

export const postsReducer = postsSlice.reducer;
