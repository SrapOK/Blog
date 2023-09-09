import { $host } from ".";
import { $authHost } from ".";
import { COMMENTS_ROUTE, POSTS_ROUTE } from "../utils/consts";

export const fetchCommentsById = async (postId: string | undefined) => {
  if (postId) {
    const { data } = await $host.get(
      `${COMMENTS_ROUTE}${POSTS_ROUTE}/${postId}`
    );
    return data;
  } else return null;
};
