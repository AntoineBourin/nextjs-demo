import React from "react";
import PostAction from "./PostAction";
import Link from "next/link";

const PostItem = ({ post }) => {
  return (
    <div
      className="post"
      style={{ textDecoration: post.isDone ? "line-through" : "" }}
    >
      <p>
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </p>
      <PostAction post={post} />
    </div>
  );
};

export default PostItem;
