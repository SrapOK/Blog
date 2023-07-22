import Admin from "./pages/Admin";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import { HOME_ROUTE, ADMIN_ROUTE, NOT_FOUND_ROUTE } from "./utils/consts";

export const publicRoutes = [
  { path: HOME_ROUTE, Component: Home },
  {
    path: NOT_FOUND_ROUTE,
    Component: NotFound
  }
];

export const authRoutes = [{ path: ADMIN_ROUTE, Component: Admin }];
