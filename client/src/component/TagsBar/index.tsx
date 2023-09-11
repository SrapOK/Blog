import React from "react";

import { HiHashtag } from "react-icons/hi";

import TagsBarSkeleton from "./Skeleton";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHooks";

import { setTag } from "../../redux/slices/filter";

interface ITagsProps {
  list: any[];
}

const TagsBar: React.FC<ITagsProps> = ({ list }) => {
  const dispatch = useAppDispatch();
  const currentTag = useAppSelector((state) => state.filter.tag);

  const onClickTag = (tag: string) => () => {
    if (currentTag === tag) dispatch(setTag(""));
    else dispatch(setTag(tag));
  };

  return list.length > 0 ? (
    <div className="p-4 w-full md:w-36 mt-10  md:ml-16 border-2 h-fit bg-white">
      <h3 className="uppercase font-semibold p-2">Тэги</h3>
      <ul className="mt-4">
        {list.map((item, index) =>
          item ? (
            <li
              onClick={onClickTag(item)}
              className={`flex justify-between p-2 border-b-2 hover:border-blue-500 duration-300 cursor-pointer ${
                item === currentTag ? " border-blue-500" : ""
              }`}
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
