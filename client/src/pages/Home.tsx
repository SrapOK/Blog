import React from "react";

import { fetchPosts, fetchTags } from "../redux/slices/posts";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../utils/hooks/reduxHooks";

import PostList from "../component/PostList";
import TagsBar from "../component/TagsBar";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { posts, tags } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);

  const isPostLoading = posts.status === "pending";
  const isTagsLoading = tags.status === "pending";

  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="flex justify-between gap-10 flex-col-reverse md:flex-row">
        <PostList list={isPostLoading ? [...Array(5)] : posts.items} />
        <TagsBar list={isTagsLoading ? [...Array(5)] : tags.items} />
      </div>
    </div>
  );
};
