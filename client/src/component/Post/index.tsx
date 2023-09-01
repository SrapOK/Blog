import React from "react";
import { useAppDispatch } from "../../utils/hooks/reduxHooks";
import { useNavigate } from "react-router-dom";

import { getFullImageUrl } from "../../utils/helpers";
import { POSTS_ROUTE } from "../../utils/consts";

import CustomLink from "../CustomLink";
import BottomPostBar from "../BottomPostBar";

import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { fetchRemovePost } from "../../redux/slices/posts";

export interface PostProps {
  _id: string;
  title: string;
  user: any;
  isEditable: boolean;
  text?: string;
  tags?: string[];
  views?: number;
  createdAt?: string;
  imageUrl?: string;
}

const Post: React.FC<PostProps> = (props: PostProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickRemove: React.MouseEventHandler<SVGAElement> = (event) => {
    if (window.confirm("Вы действительно хотите удалить статью?")) {
      dispatch(fetchRemovePost(props._id));
    }
  };

  return (
    <div className="max-w-xl h-fit  border-2 rounded bg-white  hover:border-blue-300">
      {props.imageUrl ? (
        <CustomLink to={`${POSTS_ROUTE}/${props._id}`}>
          <div className="w-full max-h-56 flex justify-center border-b">
            <img
              className="object-center object-cover"
              src={getFullImageUrl(props.imageUrl)}
              alt="post"
            />
          </div>
        </CustomLink>
      ) : (
        <></>
      )}
      <div className="pt-2 flex justify-between">
        <div className="flex gap-2 align-middle mx-2">
          {props.user.avatar ? (
            props.user.avatar
          ) : (
            <RxAvatar className=" rounded-full" size={40} />
          )}
          <div>
            <p className=" my-auto">{props.user.fullName}</p>
            <p className=" text-xs">{props.createdAt}</p>
          </div>
        </div>
        {props.isEditable ? (
          <div className="flex content-center my-1  px-2 mr-4 rounded-md gap-2 bg-gray-100">
            <AiOutlineEdit
              size={18}
              className=" hover:bg-blue-200  rounded my-auto"
              onClick={() => navigate(`${POSTS_ROUTE}/${props._id}/edit`)}
            />

            <MdDeleteOutline
              size={18}
              className=" hover:bg-blue-200  rounded my-auto"
              onClick={onClickRemove}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <CustomLink to={`${POSTS_ROUTE}/${props._id}`}>
        <div className="w-full border-b my-3 py-1 bg-blue-300   ">
          <h2 className="text-xl ml-6 text-left">{props.title}</h2>
        </div>

        <div className="max-h-16 pb-2 overflow-hidden text-justify px-6 bg-white text-gray-700">
          <p className="indent-4 text-md">{props.text}</p>
        </div>

        <BottomPostBar
          views={props.views}
          author={props.user.fullName}
          tags={props.tags}
        />
      </CustomLink>
    </div>
  );
};

export default Post;
