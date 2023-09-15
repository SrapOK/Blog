import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { authRoutes, publicRoutes } from "../routes";

function AppRouter() {
  const isAuth = true;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route index element={<Component />} key={path} path={path} />
          ))}

        {publicRoutes.map(({ path, Component }) => (
          <Route index element={<Component />} key={path} path={path} />
        ))}
      </Route>
    </Routes>
  );
}

export default AppRouter;
