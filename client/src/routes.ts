import Admin from "./pages/Admin";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import AuthPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import CreatePost from "./pages/CreatePostPage";

import {
  HOME_ROUTE,
  ADMIN_ROUTE,
  NOT_FOUND_ROUTE,
  POSTS_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  CREATE_POST_ROUTE
} from "./utils/consts";

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
  { path: ADMIN_ROUTE, Component: Admin },
  { path: `${CREATE_POST_ROUTE}`, Component: CreatePost }
];
