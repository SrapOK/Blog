import React, { useEffect } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { HOME_ROUTE, POSTS_ROUTE } from "../../utils/consts";
import { uploadImage } from "../../http/ImageAPI";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHooks";
import { selectIsAuth } from "../../redux/slices/auth";

import MoveBackButton from "../../component/BlankButton";
import Button from "../../component/Button";
import Card from "../../component/Card";

import {
  NewPost,
  createNewPostApi,
  fetchPostByIdApi,
  updatePostApi
} from "../../http/PostsAPI";
import { getFullImageUrl } from "../../utils/helpers";

const CreatePost = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid }
  } = useForm<NewPost>({
    defaultValues: {
      title: "",
      text: "",
      tags: "",
      imageUrl: ""
    }
  });

  useEffect(() => {
    if (id) {
      fetchPostByIdApi(id)
        .then((res) => {
          setValue("title", res.title);
          setValue("tags", res.tags.join());
          setValue("text", res.text);
          setValue("imageUrl", res.imageUrl);
        })
        .catch((err) => {
          alert("Не удалось получить статью");
        });
    }
  }, []);

  const onInput: React.UIEventHandler<HTMLTextAreaElement> = (event) => {
    const textarea = event.target as HTMLAreaElement;

    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const handleRemoveFile: React.MouseEventHandler<HTMLButtonElement> = () => {
    setValue("imageUrl", "");
  };

  const handleChangeFile: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      const formData = new FormData();
      if (event.target.files) {
        formData.append("image", event.target.files[0]);
        const data = await uploadImage(formData);
        setValue("imageUrl", data.url);
      }
    } catch (err) {
      console.warn(err);
      alert("Ошибка при загрузке изображения");
    }
  };

  const onSubmit = async (values: NewPost) => {
    try {
      let data;
      if (isEditing && id) {
        await updatePostApi({
          id,
          ...values
        });
      } else {
        data = await createNewPostApi({
          ...values
        });
      }
      const _id = isEditing ? id : data._id;
      console.log("Улетел");

      navigate(`${POSTS_ROUTE}/${_id}`);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при создании статьи");
    }
  };

  if (!window.localStorage.getItem("token") && !isAuth)
    return <Navigate to={HOME_ROUTE}></Navigate>;

  return (
    <Card className="max-w-3xl py-6 px-4 ">
      <form
        className="flex-col bg-transparent"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mx-6 flex flex-wrap justify-between gap-4">
          <Button
            type="button"
            onClick={() => inputFileRef.current?.click()}
            className="max-w-xs min-w-fit text-lg"
          >
            Загрузить изображение
          </Button>
          <input
            {...register("imageUrl")}
            ref={inputFileRef}
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleChangeFile}
            hidden
          ></input>
          {watch("imageUrl") && (
            <>
              <MoveBackButton
                onClick={handleRemoveFile}
                className="text-rose-700 px-5 active:text-rose-900"
              >
                Удалить
              </MoveBackButton>
              <img
                src={`${getFullImageUrl(watch("imageUrl"))}`}
                alt="yours picture"
              />
            </>
          )}
        </div>
        <div className="flex align-middle justify-center">
          <input
            className="w-full mb-4 mt-6 py-2 px-6 outline-none text-3xl font-semibold"
            type="text"
            placeholder="Заголовок статьи..."
            {...register("title", { required: "Придумайте заголовок" })}
          ></input>
        </div>

        <textarea
          className="w-full px-2 py-2 resize-none outline-none overflow-hidden text-lg"
          placeholder="Здесь ваш текст"
          onInput={onInput}
          {...register("text")}
        ></textarea>

        <input
          className="w-full my-2 py-2 px-6 outline-none text-lg border-b-2 "
          type="text"
          placeholder="Тэги..."
          {...register("tags")}
        ></input>

        <div className="mx-6 flex gap-4 justify-between ">
          <Button isValid={isValid} className=" max-w-xs text-2xl md:text-base">
            {isEditing ? "Сохранить" : "Опубликовать"}
          </Button>
          <MoveBackButton
            className="px-5 text-blue-700 active:text-indigo-900 "
            onClick={() => navigate(HOME_ROUTE)}
          >
            Отмена
          </MoveBackButton>
        </div>
      </form>
    </Card>
  );
};

export default CreatePost;
