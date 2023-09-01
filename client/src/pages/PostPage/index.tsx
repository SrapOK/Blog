import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import PostPageSkeleton from "./Skeleton";
import BottomPostBar from "../../component/BottomPostBar";
import { fetchPostByIdApi } from "../../http/PostsAPI";
import { getFullImageUrl } from "../../utils/helpers";

const Post: React.FC = () => {
  const [data, setData] = useState({} as any);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(data);
  console.log(getFullImageUrl(data.imageUrl));

  useEffect(() => {
    fetchPostByIdApi(id)
      .then((res) => {
        setData(res);
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
        {data.imageUrl ? (
          <div className="w-full flex justify-center ">
            <img
              className="rounded-t-md   "
              src={getFullImageUrl(data.imageUrl)}
              alt="post"
            />
          </div>
        ) : (
          <></>
        )}
        <div className="flex justify-center border-b py-2 bg-blue-300 ">
          <h2 className="text-2xl">{data.title}</h2>
        </div>

        <div className="py-4  indent-4 text-justify px-4 bg-white">
          {data.text}
        </div>
        <BottomPostBar
          views={data.views}
          author={data.author}
          tags={data.tags}
        />
      </div>
    );
};

export default Post;
