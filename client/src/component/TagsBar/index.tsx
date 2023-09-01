import React from "react";

import { HiHashtag } from "react-icons/hi";

import TagsBarSkeleton from "./Skeleton";

interface ITagsProps {
  list: any[];
}

const TagsBar: React.FC<ITagsProps> = ({ list }) => {
  return list.length > 0 ? (
    <div className="p-4 w-full md:w-36 mt-10  md:ml-16 border-2 h-fit bg-white">
      <h3 className="uppercase font-semibold p-2">Тэги</h3>
      <ul className="mt-4">
        {list.map((item, index) =>
          item ? (
            <li
              className=" flex justify-between p-2 border-b-2 hover:border-blue-500 cursor-pointer"
              key={index}
            >
              <HiHashtag className="mt-2" />
              {item}
            </li>
          ) : (
            <TagsBarSkeleton key={index} />
          )
        )}
      </ul>
    </div>
  ) : (
    <TagsBarSkeleton />
  );
};

export default TagsBar;
