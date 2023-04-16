"use client";

import { createContext, useState } from "react";

export const PostContext = createContext({});

const PostProvider = ({ children }) => {
  const [postsLiked, setPostsLiked] = useState([]);
  return (
    <PostContext.Provider value={{ postsLiked, setPostsLiked }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
