import React from "react";
import { useNavigate } from "react-router-dom";

const MoveBackButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const { className, children, ...otherProps } = props;
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={` py-2 my-2 transition-all duration-500  rounded-md font-semibold ${
        className ? className : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default MoveBackButton;
