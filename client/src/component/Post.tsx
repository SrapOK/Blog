import React from "react";
import { POSTS_ROUTE } from "../utils/consts";
import CustomLink from "./CustomLink";

export interface PostProps {
  id: number;
  title: string;
  text?: string;
  tags?: string[];
  views?: number;
  imageUrl?: string;
}

const Post: React.FC<PostProps> = (props: PostProps) => {
  return (
    <CustomLink to={`${POSTS_ROUTE}/${props.id}`}>
      <div className="my-16 max-w-xl mx-auto container border-2 rounded  ">
        <div className="w-full flex justify-center border-b">
          <img src={props.imageUrl} alt="post image" />
        </div>
        <div className="w-full flex justify-center border-b py-2 bg-blue-300   ">
          <h2 className="text-2xl">{props.title}</h2>
        </div>
        <div className="py-4  text-justify px-4 bg-slate-100 text-gray-700">
          {props.text}
        </div>
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
