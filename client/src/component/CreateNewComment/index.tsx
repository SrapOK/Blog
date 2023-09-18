import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../utils/hooks/reduxHooks";
import { selectIsAuth } from "../../redux/slices/auth";
import MoveBackButton from "../BlankButton";
import { LOGIN_ROUTE } from "../../utils/consts";

interface CreateNewCommentProps {
  onClick: any;
}

const CreateNewComment = (props: CreateNewCommentProps) => {
  const isAuth = useAppSelector(selectIsAuth);

  const [text, setText] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (text) {
      if (!isEditing) setIsEditing(true);
    } else setIsEditing(false);
  }, [text]);

  const onInput: React.UIEventHandler<HTMLTextAreaElement> = (event) => {
    const textarea = event.target as HTMLAreaElement;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const onFocus = () => {
    if (!isAuth) navigate(`${LOGIN_ROUTE}`);
  };
  const onClick = async () => {
    await props.onClick(text);
    setText("");
  };

  return (
    <div>
      <form>
        <textarea
          maxLength={2500}
          onFocus={onFocus}
          rows={1}
          className="border-b  pb-1  pr-4 outline-none duration-500  focus:border-gray-700 w-full resize-none overflow-hidden"
          value={text}
          placeholder="Напишите комментарий"
          onChange={(e) => setText(e.target.value)}
          onInput={onInput}
        />

        <div className="flex justify-end">
          <MoveBackButton
            className={` bg-gray-300 px-6 mr-6 ${isEditing ? "" : "hidden"}`}
            onClick={onClick}
          >
            Оставить комментарий
          </MoveBackButton>
        </div>
      </form>
    </div>
  );
};

export default CreateNewComment;
