import React from "react";

interface ICard {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<ICard> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className="flex flex-col">
      <div
        {...otherProps}
        className={`mb-10 rounded-md  bg-white border mx-auto  ${props.className} mt-36`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
