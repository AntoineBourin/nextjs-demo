import BackButton from "@/components/BackButton";
import { prisma } from "@/lib/prisma";
import React from "react";

const PostsPage = async ({ params }) => {
  const post = await prisma.post.findUnique({ where: { id: params.id } });
  return (
    <div>
      <BackButton />
      <h1>{post.title}</h1>
    </div>
  );
};

export default PostsPage;
