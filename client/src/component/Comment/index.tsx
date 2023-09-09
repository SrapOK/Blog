import React from "react";

export interface CommentProps {
  _id: string;
  text: string;
  user: any;
  createdAt: string;
  isEditable: boolean;
}

const Comment: React.FC<CommentProps> = (props) => {
  return (
    <div>
      <div>{props.user.fullName}</div>
      <div>{props.createdAt}</div>
      <div>{props.text}</div>
    </div>
  );
};

export default Comment;
