"use client";

import { PostContext } from "@/context/PostProvider";
import { useContext } from "react";

const PostsLiked = () => {
  const { postsLiked } = useContext(PostContext);
  return (
    <div>
      {postsLiked.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsLiked;
