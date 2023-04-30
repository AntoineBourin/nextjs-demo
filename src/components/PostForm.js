"use client";

import { useRouter } from "next/navigation";

const PostForm = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");

    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        router.refresh();
        router.push(`/posts/${post.id}`);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Votre titre" />
      <input type="submit" value="Ajouter" />
    </form>
  );
};

export default PostForm;
