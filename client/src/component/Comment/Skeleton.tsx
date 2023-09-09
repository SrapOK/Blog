import React from "react";
import ContentLoader from "react-content-loader";

const CommentSkeleton = ({ ...rest }) => (
  <div className="max-w-xl max-h-72  border-2 rounded">
    <ContentLoader
      speed={1}
      width={573}
      height={400}
      viewBox="0 0 573 400"
      backgroundColor="#d1d1d1"
      foregroundColor="#e1e1e1"
      {...rest}
    >
      <rect x="0" y="0" rx="0" ry="0" width="573" height="500" />
    </ContentLoader>
  </div>
);

export default CommentSkeleton;
