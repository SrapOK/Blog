import React from "react";
import { CommentProps } from "../Comment";
import Comment from "../Comment";
import CommentSkeleton from "../Comment/Skeleton";

export type commentList = (CommentProps | undefined)[];

export interface commentsListProps {
  list: commentList;
}

const CommentsList: React.FC<commentsListProps> = (props) => {
  return (
    <>
      {props.list.map((item, index) =>
        item ? (
          <Comment key={item._id} {...item}></Comment>
        ) : (
          <CommentSkeleton key={index}></CommentSkeleton>
        )
      )}
    </>
  );
};

export default CommentsList;
