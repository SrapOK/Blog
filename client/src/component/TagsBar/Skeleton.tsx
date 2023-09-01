import React from "react";
import ContentLoader from "react-content-loader";

const TagsBarSkeleton = ({ ...rest }) => (
  <ContentLoader
    width={100}
    height={40}
    backgroundColor="#ababab"
    foregroundColor="#fafafa"
    {...rest}
  >
    <rect x="10" y="15" rx="5" ry="5" width="90" height="15" />
  </ContentLoader>
);

export default TagsBarSkeleton;
