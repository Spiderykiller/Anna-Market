// app/api/upload/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  // ❌ Only admins allowed
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadResult: any = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "products" },
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    ).end(buffer);
  });

  return NextResponse.json({
    url: uploadResult.secure_url,
  });
}

