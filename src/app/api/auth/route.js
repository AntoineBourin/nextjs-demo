import { expireUserCookie, setUserCookie } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({});

  return setUserCookie(response);
}

export async function DELETE() {
  const response = NextResponse.json({});

  return expireUserCookie(response);
}
