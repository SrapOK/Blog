import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import PostPageSkeleton from "./Skeleton";
import BottomPostBar from "../../component/BottomPostBar";
import CommentsList, { commentList } from "../../component/CommentsList";

import { fetchPostByIdApi } from "../../http/PostsAPI";
import { getFullImageUrl } from "../../utils/helpers";
import { fetchCommentsByPostId } from "../../http/CommentsAPI";
import { PostProps } from "../../component/Post";

interface IfullPost extends PostProps {
  author: string;
}

const Post: React.FC = () => {
  const [postData, setPostData] = useState<IfullPost>();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchPostByIdApi(id)
      .then((res) => {
        setPostData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении статьи");
      });
  }, []);

  if (isLoading) {
    return <PostPageSkeleton />;
  } else
    return (
      <div className="my-2 container mx-auto min-w-[30%] w-fit border-2 max-w-[70%] rounded-t-md  mt-10 bg-white">
        {postData?.imageUrl ? (
          <div className="w-full flex justify-center ">
            <img
              className="rounded-t-md   "
              src={getFullImageUrl(postData.imageUrl)}
              alt="post"
            />
          </div>
        ) : (
          <></>
        )}
        <div className="flex justify-center border-b py-2 bg-blue-300 ">
          <h2 className="text-2xl">{postData?.title}</h2>
        </div>

        <div className="py-4  indent-4 text-justify px-4 bg-white">
          {postData?.text}
        </div>
        <div>
          <BottomPostBar
            views={postData?.views}
            author={postData?.author}
            tags={postData?.tags}
          />
        </div>
        <CommentsList id={id}></CommentsList>
      </div>
    );
};

export default Post;
