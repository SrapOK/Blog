import { $host } from ".";
import { POSTS_ROUTE } from "../utils/consts";

export const fetchTagsApi = async () => {
  const { data } = await $host.get(`${POSTS_ROUTE}/tags`);
  return data;
};
