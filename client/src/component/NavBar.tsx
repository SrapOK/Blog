import React from "react";
import { Link } from "react-router-dom";
import { ADMIN_ROUTE, HOME_ROUTE } from "../utils/consts";

function NavBar() {
  const isAuth = true;
  return (
    <header className="px-20 border-b flex items-center justify-between">
      <Link to={HOME_ROUTE} className="uppercase font-bold text-purple-800">
        Posts
      </Link>
      <nav className="flex items-center">
        <ul className="text-gray-500 font-semibold">
          {isAuth ? (
            <li>
              <Link
                to={ADMIN_ROUTE}
                className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800"
              >
                Войти
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to={ADMIN_ROUTE}
                className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800"
              >
                Выйти
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
