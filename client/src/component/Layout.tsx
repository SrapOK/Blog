import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <main className="mb-0 pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
