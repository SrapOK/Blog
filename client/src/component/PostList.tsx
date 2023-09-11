import React from "react";

import Post from "./Post";
import PostSkeleton from "./Post/Skeleton";

import { PostProps } from "./Post";
import { useAppDispatch, useAppSelector } from "../utils/hooks/reduxHooks";
import MoveBackButton from "./BlankButton";
import { setSort } from "../redux/slices/filter";

interface PostListProps {
  list: (PostProps | undefined)[];
}

const PostList: React.FC<PostListProps> = (props) => {
  const userData = useAppSelector((state) => state.auth.data);
  const currentSort = useAppSelector((state) => state.filter.sort);

  const dispatch = useAppDispatch();

  const onClickSort = (sort: string) => () => {
    if (currentSort === sort) dispatch(setSort(""));
    else dispatch(setSort(sort));
  };

  return (
    <div className="mt-10">
      <div className="ml-1 space-x-10">
        <MoveBackButton
          className={`px-6 hover:border-blue-800 rounded-none border-b-4   ${
            currentSort === "new" ? " border-blue-800 " : "border-transparent"
          }`}
          onClick={onClickSort("new")}
        >
          Новые
        </MoveBackButton>
        <MoveBackButton
          className={`px-6 hover:border-blue-800 rounded-none border-b-4  ${
            currentSort === "popular" ? "border-blue-800" : "border-transparent"
          }`}
          onClick={onClickSort("popular")}
        >
          Популярные
        </MoveBackButton>
      </div>
      <div className=" flex flex-col align-middle gap-10 bg-gray-100">
        {props.list.map((item, index) =>
          item ? (
            <Post
              key={item._id}
              {...item}
              isEditable={userData?._id === item.user._id}
            />
          ) : (
            <PostSkeleton key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default PostList;
