import React from "react";
import { Navigate } from "react-router-dom";
import { HOME_ROUTE } from "../utils/consts";
import { useForm } from "react-hook-form";
import { fetchRegister, selectIsAuth } from "../redux/slices/auth";
import { useAppDispatch, useAppSelector } from "../utils/hooks/reduxHooks";
import Button from "../component/Button";
import Input from "../component/Input";
import Card from "../component/Card";

export interface IRegister {
  email: string;
  password: string;
  fullName: string;
}

const LoginPage = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IRegister>({
    defaultValues: {
      email: "",
      password: "",
      fullName: ""
    }
  });

  const onSubmit = async (values: IRegister) => {
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) return alert("Не удалось авторизоваться");
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) return <Navigate to={HOME_ROUTE}></Navigate>;

  return (
    <Card className="w-min py-6 px-14">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col bg-transparent"
      >
        <Input
          error={errors.fullName}
          placeholder="Иван Иванов"
          type="text"
          {...register("fullName", { required: "Введите имя" })}
        >
          Имя пользователя
        </Input>

        <Input
          error={errors.email}
          placeholder="123@test.com"
          type="email"
          {...register("email", { required: "Укажите почту" })}
        >
          Email
        </Input>

        <Input
          error={errors.password}
          placeholder="qwerty"
          type="password"
          {...register("password", { required: "Введите пароль" })}
        >
          Пароль
        </Input>

        <Button isValid={isValid}>Зарегистрироваться</Button>
      </form>
    </Card>
  );
};

export default LoginPage;
