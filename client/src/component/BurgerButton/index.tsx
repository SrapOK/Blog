import React from "react";
import styles from "./styles.module.scss";
import { useAppDispatch } from "../../utils/hooks/reduxHooks";
import { toggleBurgerMenu } from "../../redux/slices/components";

interface BurgerButtonProps {
  children?: React.ReactNode;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(toggleBurgerMenu());
  };

  return (
    <div onClick={onClick} className={styles.burgerBtn}>
      {children}
    </div>
  );
};

export default BurgerButton;
