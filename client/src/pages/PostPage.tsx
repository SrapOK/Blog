import React from "react";
import { POSTS_ROUTE } from "../utils/consts";
import CustomLink from "../component/CustomLink";

const Post: React.FC = () => {
  const props = {
    id: 2,
    title: "test",
    imageUrl: "re",
    views: 3,
    tags: ["fsd", "fdf"],
    text: "fds"
  };
  return (
    <CustomLink to={`${POSTS_ROUTE}/${props.id}`}>
      <div className="my-2 mx-auto container border-2 rounded ">
        <div className="w-full flex justify-center border-b py-2 bg-blue-300  rounded-t ">
          <h2 className="text-2xl">{props.title}</h2>
        </div>
        <div className="w-full flex justify-center border-b">
          <img src={props.imageUrl} alt="post image" />
        </div>
        <div className="py-4  text-justify px-4 bg-slate-100">{props.text}</div>
        <div className="flex justify-between px-10 py-2 bg-blue-300 rounded-b">
          <div>Просмотров: {props.views}</div>

          <div className="flex gap-2 justify-evenly ">
            {props.tags?.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </CustomLink>
  );
};

export default Post;
