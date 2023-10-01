import React from "react";

import { AiOutlineEye } from "react-icons/ai";
import { HiHashtag } from "react-icons/hi";

interface IBottomPostBar {
  tags?: any[];
  views?: number;
  author?: string;
}

const BottomPostBar: React.FC<IBottomPostBar> = (props) => {
  return (
    <div className="flex justify-between px-6 py-1 border-t-2 gap-x-20 rounded-b">
      <div className="flex  gap-2">
        <AiOutlineEye size={18} className="my-auto" />
        <div>{props.views}</div>
      </div>

      <div className="flex justify-between gap-2 overflow-hidden max-w-[50%]">
        {props.tags?.slice(0, 4).map((item, index) => (
          <div key={index} className="flex flex-row ">
            <HiHashtag className="my-auto mr-1" />

            <p className="mb-1">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomPostBar;
