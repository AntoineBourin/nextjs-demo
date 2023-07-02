import { NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(request) {
  const verifiedToken = await verifyAuth(request).catch((err) => {
    console.log(err);
  });

  if (!verifiedToken) {
    if (request.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: 401 }
      );
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: ["/protected", "/api/protected"],
};
