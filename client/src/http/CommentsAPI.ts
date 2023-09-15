import { $host } from ".";
import { $authHost } from ".";
import { COMMENTS_ROUTE, POSTS_ROUTE } from "../utils/consts";

export const fetchCommentsByPostId = async (postId: string | undefined) => {
  if (postId) {
    const { data } = await $host.get(
      `${COMMENTS_ROUTE}${POSTS_ROUTE}/${postId}`
    );
    return data;
  } else return null;
};

export const createNewComment = async (
  postId: string | undefined,
  text: string
) => {
  if (postId) {
    await $authHost.post(`${COMMENTS_ROUTE}/${postId}`, {
      text
    });
  } else return null;
};
