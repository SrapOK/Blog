import React from "react";

import Post from "./Post";
import PostSkeleton from "./Post/Skeleton";

import { PostProps } from "./Post";
import { useAppSelector } from "../utils/hooks/reduxHooks";

interface PostListProps {
  list: (PostProps | undefined)[];
}

const PostList: React.FC<PostListProps> = (props) => {
  const userData = useAppSelector((state) => state.auth.data);

  return (
    <div className="mt-10 flex flex-col align-middle gap-10 bg-gray-100">
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
  );
};

export default PostList;
