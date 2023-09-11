import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <main className="mb-0 pb-16">
        <Suspense fallback={<h1>ЗАГРУЗКА</h1>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
