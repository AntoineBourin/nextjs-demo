import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const courses = [
    { id: 1, name: "Pourquoi utiliser NextJS ?" },
    { id: 2, name: "Formation ReactJS" },
    { id: 3, name: "NextJS, de A à Z" },
  ];

  return NextResponse.json({ courses });
}
