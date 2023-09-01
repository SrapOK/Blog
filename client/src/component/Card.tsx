import React from "react";

interface ICard {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<ICard> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className={`md:my-20 my-10 rounded-md h-1/3  bg-white border mx-auto  ${props.className} `}
    >
      {children}
    </div>
  );
};

export default Card;
