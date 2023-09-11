import React from "react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../utils/hooks/reduxHooks";

import { fetchCommentsByPostId } from "../../http/CommentsAPI";
import { createNewComment } from "../../http/CommentsAPI";

import { CommentProps } from "../Comment";
import Comment from "../Comment";
import CommentSkeleton from "../Comment/Skeleton";
import CreateNewComment from "../CreateNewComment";

export type commentList = (CommentProps | undefined)[];

interface CommentsListProps {
  id?: string;
}

const CommentsList: React.FC<CommentsListProps> = (props) => {
  const [comments, setComments] = useState<commentList>([]);

  const getComments = async () => {
    fetchCommentsByPostId(props.id)
      .then((res) => {
        setComments(res);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении комментариев");
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  const clickOnCreateNewComment =
    (id: string | undefined) => async (text: string) => {
      await createNewComment(id, text);
      await getComments();
    };

  return (
    <div className=" border-t-2">
      <div className="ml-1 md:ml-6 my-2 py-2 space-y-3">
        <p>
          {comments.length}
          {comments.length > 3 ? " Комментариев" : " Комментария"}
        </p>
        <CreateNewComment onClick={clickOnCreateNewComment(props.id)} />
      </div>
      <div className="ml-1 md:ml-6">
        {comments.map((item, index) =>
          item ? (
            <Comment key={item._id} {...item}></Comment>
          ) : (
            <CommentSkeleton key={index}></CommentSkeleton>
          )
        )}
      </div>
    </div>
  );
};

export default CommentsList;
