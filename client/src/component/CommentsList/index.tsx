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
    <div className="py-2 border-t-2">
      {props.list.map((item, index) =>
        item ? (
          <Comment key={item._id} {...item}></Comment>
        ) : (
          <CommentSkeleton key={index}></CommentSkeleton>
        )
      )}
    </div>
  );
};

export default CommentsList;
