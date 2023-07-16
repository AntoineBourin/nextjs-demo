import { NextResponse } from "next/server";
import { categories } from "./[id]/route";

export async function GET() {
  return NextResponse.json({ number: categories.length });
}
