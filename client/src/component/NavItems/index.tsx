import { Link } from "react-router-dom";
import {
  CREATE_POST_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE
} from "../../utils/consts";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHooks";
import { logout, selectIsAuth } from "../../redux/slices/auth";

import { throttle } from "../../utils/decorators";

const NavItems = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = throttle(useAppDispatch(), 1500);

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };
  return (
    <>
      {isAuth ? (
        <>
          <li>
            <Link
              to={CREATE_POST_ROUTE}
              className=" flex justify-center align-middle text-center py-3 px-2 border-b-2 border-transparent hover:text-blue-800 hover:border-blue-800"
            >
              Написать статью
            </Link>
          </li>
          <li>
            <Link
              onClick={onClickLogout}
              to={HOME_ROUTE}
              className=" flex justify-center align-middle text-center  py-3 px-2 border-b-2 border-transparent hover:text-blue-800 hover:border-blue-800"
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
              className=" flex justify-center align-middle text-center transition-all duration-500  py-3 px-2 border-b-4 border-transparent hover:text-blue-800 hover:border-blue-800 active:text-indigo-900 active:border-indigo-900"
            >
              Зарегистрироваться
            </Link>
          </li>
          <li>
            <Link
              to={LOGIN_ROUTE}
              className=" flex justify-center align-middle transition-all duration-500  py-3 px-2 border-b-4 border-transparent hover:text-blue-800 hover:border-blue-800 active:text-indigo-900 active:border-indigo-900"
            >
              Войти
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default NavItems;
