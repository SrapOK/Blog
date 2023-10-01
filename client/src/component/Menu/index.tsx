import { useAppSelector, useAppDispatch } from "../../utils/hooks/reduxHooks";

import { setSearch } from "../../redux/slices/filter";

import BurgerButton from "../BurgerButton";
import NavBar from "../NavBar";
import SearchField from "../NavBar/SearchField";

const Menu = () => {
  const isMobile = useAppSelector((state) => state.components.isMobile);
  const dispatch = useAppDispatch();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <header className=" drop-shadow-md fixed w-full h-12 px-5 md:px-20 border-b flex items-center justify-between bg-white">
      {isMobile ? (
        <>
          <BurgerButton>
            <span></span>
          </BurgerButton>
          <SearchField onChangeHandler={onChange}></SearchField>
        </>
      ) : (
        <NavBar />
      )}
    </header>
  );
};

export default Menu;
