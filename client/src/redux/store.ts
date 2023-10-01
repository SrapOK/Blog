import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";
import { authReducer } from "./slices/auth";
import { filterReducer } from "./slices/filter";
import { componentsReducer } from "./slices/components";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    filter: filterReducer,
    components: componentsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
