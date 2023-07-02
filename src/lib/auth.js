import { SignJWT, jwtVerify } from "jose";

const COOKIES_TOKEN_NAME = "user-token";

export async function verifyAuth(request) {
  const token = request.cookies.get(COOKIES_TOKEN_NAME)?.value;

  if (!token) {
    throw new Error("Missing user token");
  }

  try {
    const verifiedToken = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.SECRET_KEY)
    );
    return verifiedToken.payload;
  } catch (err) {
    throw new Error("Your token is invalid/expired");
  }
}

export async function setUserCookie(response) {
  const token = await new SignJWT({ user: "demo" })
    .setProtectedHeader({ alg: "HS256" })
    .sign(new TextEncoder().encode(process.env.SECRET_KEY));

  response.cookies.set({
    name: COOKIES_TOKEN_NAME,
    value: token,
    maxAge: 3600,
    path: "/",
  });

  return response;
}

export function expireUserCookie(response) {
  response.cookies.set({
    name: COOKIES_TOKEN_NAME,
    value: "",
    maxAge: 0,
  });

  return response;
}
