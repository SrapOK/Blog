import React, { FC } from "react";
import Post from "./Post";

interface PostListProps {
  list: any[];
}

const PostList: React.FC<PostListProps> = (props) => {
  return (
    <>
      {props.list.map((item) => (
        <Post key={item._id} {...item} />
      ))}
    </>
  );
};

export default PostList;
