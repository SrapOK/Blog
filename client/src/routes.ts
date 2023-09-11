import { lazy } from "react";

import Home from "./pages/Home";

import {
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
  POSTS_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  CREATE_POST_ROUTE
} from "./utils/consts";

const NotFound = lazy(() => import("./pages/NotFound"));
const AuthPage = lazy(() => import("./pages/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const CreatePost = lazy(() => import("./pages/CreatePostPage"));
const PostPage = lazy(() => import("./pages/PostPage"));

export const publicRoutes = [
  { path: HOME_ROUTE, Component: Home },
  {
    path: NOT_FOUND_ROUTE,
    Component: NotFound
  },

  { path: `${LOGIN_ROUTE}`, Component: AuthPage },
  { path: `${REGISTRATION_ROUTE}`, Component: RegistrationPage },

  { path: `${POSTS_ROUTE}/:id`, Component: PostPage }
];

export const authRoutes = [
  { path: `${POSTS_ROUTE}/:id/edit`, Component: CreatePost },
  { path: `${CREATE_POST_ROUTE}`, Component: CreatePost }
];
