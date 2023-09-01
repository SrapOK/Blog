import React from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children?: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  return (
    <Link className="h-fit" to={props.to}>
      {props.children}
    </Link>
  );
};

export default CustomLink;
