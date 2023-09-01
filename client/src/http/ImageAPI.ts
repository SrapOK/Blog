import { $host } from ".";
import { IMAGES_ROUTE } from "../utils/consts";

export const uploadImage = async (formDataImage: FormData) => {
  const { data } = await $host.post(IMAGES_ROUTE, formDataImage);
  return data;
};
