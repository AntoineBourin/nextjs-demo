import React from "react";
import PostAction from "./PostAction";

const PostItem = ({ post }) => {
  return (
    <div
      className="post"
      style={{ textDecoration: post.isDone ? "line-through" : "" }}
    >
      <p>{post.title}</p>
      <PostAction post={post} />
    </div>
  );
};

export default PostItem;
