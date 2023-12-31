import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { POSTS_ROUTE } from "../../utils/consts";
import { fetchTagsApi } from "../../http/TagsAPI";
import { fetchPostsApi, removePostApi } from "../../http/PostsAPI";
import { IPostFilterOptions } from "./filter";
import { RootState } from "../store";

type status = "pending" | "fulfilled" | "rejected";

interface IPostSliceInitialState {
  totalCount: number;
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
  totalCount: 0,
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
  async ({ tag, sort, search, currentPage }: IPostFilterOptions) => {
    const data = fetchPostsApi(tag, sort, search, String(currentPage));
    return data;
  }
);

export const updatePosts = createAsyncThunk(
  `${POSTS_ROUTE}/updatePosts`,
  async ({ tag, sort, search, currentPage }: IPostFilterOptions) => {
    const data = fetchPostsApi(tag, sort, search, String(currentPage));
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
      //fetchPosts
      .addCase(fetchPosts.pending, (state) => {
        state.posts.items = [];
        state.posts.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        if (action.payload) {
          state.posts.items = action.payload.posts;

          state.totalCount = action.payload.totalCount;
        }
        state.posts.status = "fulfilled";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.posts.items = [];
        state.posts.status = "rejected";
      })
      //updatePosts
      .addCase(updatePosts.pending, (state) => {
        if (!state.posts.items) state.posts.items = [];
        state.posts.status = "pending";
      })
      .addCase(updatePosts.fulfilled, (state, action) => {
        if (action.payload) {
          state.posts.items = [
            ...state.posts.items.concat(action.payload.posts)
          ];
          state.totalCount = action.payload.totalCount;
        }
        state.posts.status = "fulfilled";
      })
      .addCase(updatePosts.rejected, (state) => {
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

export const selectTotalCount = (state: RootState) => state.posts.totalCount;

export const postsReducer = postsSlice.reducer;
