import React from "react";

import { RxAvatar } from "react-icons/rx";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

export interface CommentProps {
  _id: string;
  text: string;
  rate: number;
  user: any;
  createdAt: string;
  isEditable: boolean;
}

const Comment: React.FC<CommentProps> = (props) => {
  return (
    <div className="flex border-b gap-4 ml-2 my-4 py-1 mr-0 ">
      <div className="flex align-middle flex-col justify-center text-center gap-2">
        <div className=" mx-auto">
          {props.user.avatarUrl ? (
            <img
              width={50}
              className="rounded-full "
              src={props.user.avatarUrl}
              alt=""
            />
          ) : (
            <RxAvatar className=" rounded-full" size={40} />
          )}
        </div>
        <div className="flex gap-2">
          <AiOutlineLike
            size={22}
            className="my-auto rounded hover:bg-gray-200"
          ></AiOutlineLike>
          <p
            className={`text-lg text-center ${
              props.rate >= 0 ? " text-green-700" : "text-red-700"
            }`}
          >
            {props.rate}
          </p>
          <AiOutlineDislike
            size={22}
            className=" my-auto rounded hover:bg-gray-200"
          ></AiOutlineDislike>
        </div>
      </div>
      <div className="ml-2">
        <p className=" my-auto">{props.user.fullName}</p>
        <p className="text-gray-700 text-md">{props.text}</p>
      </div>
    </div>
  );
};

export default Comment;
