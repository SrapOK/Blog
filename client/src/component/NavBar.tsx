import React from "react";
import { Link } from "react-router-dom";
import {
  CREATE_POST_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE
} from "../utils/consts";
import { useAppDispatch, useAppSelector } from "../utils/hooks/reduxHooks";
import { logout, selectIsAuth } from "../redux/slices/auth";

function NavBar() {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };

  return (
    <header className="px-5 md:px-20 border-b flex items-center justify-between bg-white">
      <Link to={HOME_ROUTE} className="uppercase font-bold text-blue-800">
        Posts
      </Link>
      <nav className="flex items-center">
        <ul className="text-gray-500 font-semibold flex gap-5">
          {isAuth ? (
            <>
              <li>
                <Link
                  to={CREATE_POST_ROUTE}
                  className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-800 hover:border-blue-800"
                >
                  Написать статью
                </Link>
              </li>
              <li>
                <Link
                  onClick={onClickLogout}
                  to={HOME_ROUTE}
                  className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-800 hover:border-blue-800"
                >
                  Выйти
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to={REGISTRATION_ROUTE}
                  className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-800 hover:border-blue-800 active:text-indigo-900 active:border-indigo-900"
                >
                  Зарегистрироваться
                </Link>
              </li>
              <li>
                <Link
                  to={LOGIN_ROUTE}
                  className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-800 hover:border-blue-800 active:text-indigo-900 active:border-indigo-900"
                >
                  Войти
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;