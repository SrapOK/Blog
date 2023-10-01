import { $authHost, $host } from ".";
import { POSTS_ROUTE } from "../utils/consts";

export interface NewPost {
  title: string;
  text: string;
  tags?: string;
  imageUrl?: string;
}

export interface UpdatedPost extends NewPost {
  id: string;
}

export const fetchPostsApi = async (
  tag = "",
  sort = "",
  search = "",
  page = "",
  limit = ""
) => {
  const params = new URLSearchParams();

  if (tag) params.append("tag", tag);
  if (sort) params.append("sort", sort);
  if (search) params.append("search", search);
  if (limit) params.append("limit", limit);
  else params.append("limit", "5");
  if (page) params.append("page", page);

  const { data } = await $host.get(`${POSTS_ROUTE}`, { params });

  return data;
};

export const fetchPostByIdApi = async (id: string | undefined) => {
  if (id) {
    const { data } = await $host.get(`${POSTS_ROUTE}/${id}`);
    return data;
  } else return null;
};

export const removePostApi = async (id: string) => {
  const { data } = await $authHost.delete(`${POSTS_ROUTE}/${id}`);

  if (data.success) return id;
  else return null;
};

export const createNewPostApi = async (values: NewPost) => {
  const { data } = await $authHost.post(`${POSTS_ROUTE}`, values);
  return data;
};

export const updatePostApi = async (values: UpdatedPost) => {
  const { id, ...clearValues } = values;
  const { data } = await $authHost.patch(`${POSTS_ROUTE}/${id}`, clearValues);
  return data;
};
