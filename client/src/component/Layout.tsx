import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import LoadingPage from "../pages/LoadingPage";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <main className="mb-0 pb-16">
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
