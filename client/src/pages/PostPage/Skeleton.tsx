import ContentLoader from "react-content-loader";

const PostPageSkeleton = ({ ...rest }) => (
  <ContentLoader
    height="500"
    width="97%"
    backgroundColor="#d1d1d1"
    foregroundColor="#e1e1e1"
    {...rest}
  >
    <rect x="50" y="15" rx="4" ry="4" width="100%" height="50" />
    <rect x="50" y="100" rx="2" ry="2" width="100%" height="2000" />
  </ContentLoader>
);

export default PostPageSkeleton;
