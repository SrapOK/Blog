import { useRef, useCallback, FC } from "react";

import Post from "./Post";
import PostSkeleton from "./Post/Skeleton";
import { PostProps } from "./Post";
import { useAppDispatch, useAppSelector } from "../utils/hooks/reduxHooks";
import MoveBackButton from "./BlankButton";
import {
  selectCurrentPage,
  updateCurrentPage,
  setSort
} from "../redux/slices/filter";

interface PostListProps {
  list: (PostProps | undefined)[];
}

const PostList: FC<PostListProps> = (props) => {
  const observer = useRef<IntersectionObserver>();
  const currentPage = useAppSelector(selectCurrentPage);
  const limit = useAppSelector((state) => state.filter.limit);
  const totalCount = useAppSelector((state) => state.posts.totalCount);
  const userData = useAppSelector((state) => state.auth.data);
  const currentSort = useAppSelector((state) => state.filter.sort);

  const hasMore = totalCount > limit * currentPage;

  const dispatch = useAppDispatch();

  const lastPost = useCallback(
    (node: HTMLDivElement) => {
      if (!props.list[0]) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && hasMore) {
            dispatch(updateCurrentPage(1));
          }
        },
        { rootMargin: "50px 0px 0px" }
      );
      if (node) observer.current.observe(node);
    },
    [props.list[0], hasMore]
  );

  const onClickSort = (sort: string) => () => {
    if (currentSort === sort) dispatch(setSort(""));
    else dispatch(setSort(sort));
  };

  return (
    <div>
      <div className="ml-1 space-x-10">
        <MoveBackButton
          className={`px-6 hover:border-blue-800 rounded-none border-b-4   ${
            currentSort === "new" ? " border-blue-800 " : "border-transparent"
          }`}
          onClick={onClickSort("new")}
        >
          Новые
        </MoveBackButton>
        <MoveBackButton
          className={`px-6 hover:border-blue-800 rounded-none border-b-4  ${
            currentSort === "popular" ? "border-blue-800" : "border-transparent"
          }`}
          onClick={onClickSort("popular")}
        >
          Популярные
        </MoveBackButton>
      </div>
      <div className=" flex flex-col align-middle justify-center gap-10 bg-gray-100">
        {props.list.map((item, index) =>
          item ? (
            props.list.length === index + 1 ? (
              <Post
                ref={lastPost}
                key={item._id}
                {...item}
                isEditable={userData?._id === item.user._id}
              />
            ) : (
              <Post
                key={item._id}
                {...item}
                isEditable={userData?._id === item.user._id}
              />
            )
          ) : (
            <PostSkeleton key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default PostList;
