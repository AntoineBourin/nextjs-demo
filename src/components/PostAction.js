"use client";

import { useRouter } from "next/navigation";

const PostAction = ({ post }) => {
  const router = useRouter();
  const handleClick = () => {
    fetch("/api/posts", {
      method: "PATCH",
      body: JSON.stringify({
        id: post.id,
        isDone: true,
      }),
    }).then(() => router.refresh());
  };

  return <button onClick={handleClick}>Terminer</button>;
};

export default PostAction;
