import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const auth = request.headers.get("authorization");
  try {
    const decodedToken = jwt.verify(auth, process.env.SECRET_KEY);
    const notes = await prisma.note.findMany({
      where: {
        user: decodedToken.user,
      },
    });
    return NextResponse.json(notes);
  } catch (e) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(request) {
  const auth = request.headers.get("authorization");
  const body = await request.json();

  try {
    const decodedToken = jwt.verify(auth, process.env.SECRET_KEY);
    const note = await prisma.note.create({
      data: {
        text: body.text,
        user: decodedToken.user,
      },
    });
    return NextResponse.json(note);
  } catch (e) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
