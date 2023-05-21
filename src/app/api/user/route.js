import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const user = {
    id: "955032",
    name: "Jean Dupont",
  };

  return NextResponse.json({ user });
}
