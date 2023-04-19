import { prisma } from "@/lib/prisma";

export async function POST(request) {
  const body = await request.json();
  const post = await prisma.post.create({
    data: {
      title: body.title,
    },
  });
  return new Response(JSON.stringify(post), { status: 200 });
}

export async function PATCH(request) {
  const body = await request.json();
  const post = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      isDone: body.isDone,
    },
  });
  return new Response(JSON.stringify(post), { status: 200 });
}

export async function DELETE(request) {
  const body = await request.json();
  await prisma.post.delete({
    where: {
      id: body.id,
    },
  });
  return new Response(null, { status: 204 });
}
