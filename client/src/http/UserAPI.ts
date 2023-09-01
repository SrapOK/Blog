import { $host, $authHost } from ".";
import { ILogin } from "../pages/LoginPage";
import { IRegister } from "../pages/RegistrationPage";
import {
  USER_ROUTE,
  LOGIN_ROUTE,
  AUTH_ROUTE,
  REGISTRATION_ROUTE
} from "../utils/consts";

export const loginApi = async (params: ILogin) => {
  const { data } = await $host.post(`${USER_ROUTE}${LOGIN_ROUTE}`, params);
  return data;
};

export const checkApi = async () => {
  const { data } = await $authHost.get(`${USER_ROUTE}${AUTH_ROUTE}`);
  return data;
};

export const registerApi = async (params: IRegister) => {
  const { data } = await $host.post(
    `${USER_ROUTE}${REGISTRATION_ROUTE}`,
    params
  );
  return data;
};
