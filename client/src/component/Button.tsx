import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isValid?: boolean;
}

const Button: React.FC<IButton> = (props) => {
  const { className, children, isValid, ...otherProps } = props;
  const isValidModified = typeof isValid === "undefined" ? true : isValid;

  return (
    <button
      className={`border-4 py-2 my-2 transition-all duration-500  rounded-md w-full
      ${
        !isValidModified
          ? "border-gray-300  text-gray-500 "
          : " border-transparent bg-blue-400  text-black active:bg-blue-500"
      }
       ${className ? className : ""}`}
      type={otherProps.type ? otherProps.type : "submit"}
      {...otherProps}
      disabled={!isValidModified}
    >
      {children}
    </button>
  );
};

export default Button;
