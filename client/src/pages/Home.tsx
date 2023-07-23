import React from "react";
import PostList from "../component/PostList";
import { useEffect } from "react";
import { fetchPosts } from "../redux/slices/posts";
import { useAppDispatch, useAppSelector } from "../utils/hooks/reduxHooks";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { posts, tags } = useAppSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const arePostsLoaded = posts.status === "fulfilled";
  return (
    <>
      {arePostsLoaded ? (
        <PostList list={posts.items} />
      ) : (
        <PostList list={Array(5)} />
      )}
    </>
  );
};
