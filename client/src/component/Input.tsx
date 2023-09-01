import React from "react";

import { FieldError } from "react-hook-form";
import { Merge } from "react-hook-form";

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error: Merge<FieldError, (FieldError | undefined)[]> | undefined;
  children?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { children, error, ...otherProps } = props;

  return (
    <div className="text-gray-600 mt-4 my-2 w-full first:mt-2 ">
      <label className=" align-middle mb-1 ml-8" htmlFor="fullName">
        {error?.message ?? children}
      </label>
      <input
        ref={ref}
        className={
          "p-2 border-t border-b px-8 " +
          (error ? "border-red-300 text-red-300" : "")
        }
        {...otherProps}
      />
    </div>
  );
});

export default Input;
