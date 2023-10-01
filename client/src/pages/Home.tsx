import { fetchPosts, fetchTags, updatePosts } from "../redux/slices/posts";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../utils/hooks/reduxHooks";

import PostList from "../component/PostList";
import TagsBar from "../component/TagsBar";
import { selectCurrentPage } from "../redux/slices/filter";

const Home = () => {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector(selectCurrentPage);
  const { posts, tags } = useAppSelector((state) => state.posts);
  const { tag, sort, search } = useAppSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchPosts({ tag, sort, search }));
    dispatch(fetchTags());
  }, [tag, sort, search]);

  useEffect(() => {
    if (currentPage != 1) {
      dispatch(updatePosts({ tag, sort, search, currentPage: currentPage }));
      dispatch(fetchTags());
    }
  }, [currentPage]);

  const isPostLoading = posts.status === "pending" && !posts.items.length;
  const areTagsLoading = tags.status === "pending";

  return (
    <div className="bg-gray-100 flex justify-center  ">
      <div className="flex justify-between gap-x-10 flex-col-reverse mt-16 gap-y-4 md:flex-row mb-10 mt- ">
        <PostList list={isPostLoading ? [...Array(5)] : posts.items} />
        <TagsBar list={areTagsLoading ? [...Array(5)] : tags.items} />
      </div>
    </div>
  );
};

export default Home;
