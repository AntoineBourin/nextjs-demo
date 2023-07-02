import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();

  const token = jwt.sign({ user: payload.username }, process.env.SECRET_KEY);

  return NextResponse.json(
    { token },
    {
      headers: {
        "set-cookie": `token=${token}; Max-Age=3600; Path=/`,
      },
    }
  );
}
