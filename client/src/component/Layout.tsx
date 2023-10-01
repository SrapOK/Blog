import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

import LoadingPage from "../pages/LoadingPage";
import Footer from "./Footer";
import Menu from "./Menu";
import { useAppDispatch } from "../utils/hooks/reduxHooks";
import { setIsMobile } from "../redux/slices/components";
import BurgerMenu from "../component/BurgerMenu";
import NavItems from "../component/NavItems";

function Layout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (innerWidth < 768) dispatch(setIsMobile(true));
      else if (innerWidth > 768) dispatch(setIsMobile(false));
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <div>
        <Menu />
        <BurgerMenu>
          <NavItems />
        </BurgerMenu>
      </div>
      <main className="mb-0 min-h-screen ">
        <Suspense fallback={<LoadingPage />}>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
