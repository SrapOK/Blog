import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";
import { useAppDispatch } from "../../utils/hooks/reduxHooks";
import { setSearch } from "../../redux/slices/filter";

import { throttle } from "../../utils/decorators";
import SearchField from "./SearchField";
import NavItems from "../NavItems";

function NavBar() {
  const dispatch = throttle(useAppDispatch(), 1500);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <Link to={HOME_ROUTE} className="uppercase font-bold text-blue-800">
        Posts
      </Link>

      <SearchField onChangeHandler={onChange}></SearchField>

      <nav className="items-center">
        <ul className="text-gray-500 font-semibold flex gap-5">
          <NavItems></NavItems>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
