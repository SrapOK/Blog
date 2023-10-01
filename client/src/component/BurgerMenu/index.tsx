import React from "react";
import styles from "./styles.module.scss";
import { useAppSelector, useAppDispatch } from "../../utils/hooks/reduxHooks";
import { toggleBurgerMenu } from "../../redux/slices/components";

interface BurgerMenuProps {
  children: React.ReactNode;
}

const BurgerMenu: React.FC<BurgerMenuProps> = (props) => {
  const isMobile = useAppSelector((state) => state.components.isMobile);
  const dispatch = useAppDispatch();
  const burgerMenuState = useAppSelector(
    (state) => state.components.BurgerMenu
  );

  const onClick = () => {
    dispatch(toggleBurgerMenu());
  };



  return (
    <div
      onClick={onClick}
      className={`${styles.menu}  ${
        !(burgerMenuState && isMobile) && "hidden"
      } `}
    >
      <div>
        <div className="mx-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default BurgerMenu;
