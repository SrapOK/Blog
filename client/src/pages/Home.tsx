import React from "react";

import { fetchPosts, fetchTags } from "../redux/slices/posts";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../utils/hooks/reduxHooks";

import PostList from "../component/PostList";
import TagsBar from "../component/TagsBar";

const Home = () => {
  const dispatch = useAppDispatch();
  const { posts, tags } = useAppSelector((state) => state.posts);
  const { tag, sort } = useAppSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchPosts({ tag, sort }));
    dispatch(fetchTags());
  }, [tag, sort]);

  const isPostLoading = posts.status === "pending";
  const areTagsLoading = tags.status === "pending";

  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="flex justify-between gap-10 flex-col-reverse md:flex-row">
        <PostList list={isPostLoading ? [...Array(5)] : posts.items} />
        <TagsBar list={areTagsLoading ? [...Array(5)] : tags.items} />
      </div>
    </div>
  );
};

export default Home;
