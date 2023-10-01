import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchLogin, selectIsAuth } from "../redux/slices/auth";
import { useAppDispatch, useAppSelector } from "../utils/hooks/reduxHooks";

import { HOME_ROUTE } from "../utils/consts";

import Input from "../component/Input";
import Button from "../component/Button";
import Card from "../component/Card";

export interface ILogin {
  email: string;
  password: string;
}

const LoginPage = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (values: ILogin) => {
    const data = await dispatch(fetchLogin(values));
    if (!data.payload) return alert("Не удалось авторизоваться");
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) return <Navigate to={HOME_ROUTE}></Navigate>;

  return (
    <Card className="w-min py-6 px-14 ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col bg-white">
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
        <Button isValid={isValid}>Войти</Button>
      </form>
    </Card>
  );
};

export default LoginPage;
