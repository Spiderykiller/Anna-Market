// app/api/products/route.ts
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  // ❌ Not logged in
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  // ❌ Not admin
  if (session.user.role !== "ADMIN") {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403 }
    );
  }

  // Parse request body
  const body: {
    name: string;
    description: string;
    category: string;
    images: string[];
    price?: number;
  } = await req.json();

  // Validate required fields
  if (!body.name || !body.description || !body.category || !body.images) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Create product
  const product = await prisma.product.create({
    data: {
      name: body.name,
      description: body.description,
      category: body.category,
      images: body.images,
      price: body.price, // optional
    },
  });

  return NextResponse.json(product);
}

