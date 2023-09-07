import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";
import { authReduser } from "./slices/auth";
import { filterReduser } from "./slices/filter";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReduser,
    filter: filterReduser
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
