"use client";

import { PostContext } from "@/context/PostProvider";
import { useContext } from "react";

const Like = ({ post }) => {
  const { setPostsLiked } = useContext(PostContext);
  return (
    <div>
      <button
        onClick={() => setPostsLiked((postsLiked) => [...postsLiked, post])}
      >
        Like
      </button>
    </div>
  );
};

export default Like;
