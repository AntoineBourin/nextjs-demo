"use client";
import { useState } from "react";

const Like = () => {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      <button onClick={() => setLikes((likes) => likes + 1)}>
        Liked {likes} times
      </button>
    </div>
  );
};

export default Like;
