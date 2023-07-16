import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export const categories = [
  { id: "1", name: "Décorations" },
  { id: "2", name: "Canapés" },
];

export async function GET(request, { params: { id } }) {
  const category = categories.find((category) => category.id === id);

  if (!category) {
    return notFound();
  }

  return NextResponse.json(category);
}
