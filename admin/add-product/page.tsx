"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AddProductPage from "@/components/admin/Addproductpage"; // your form component

export default function AdminAddProductPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  // ❌ Not admin → redirect to home
  if (!session || session.user.role !== "ADMIN") {
    redirect("/");
  }

  // ✅ Admin users see the page
  return <AddProductPage />;
}
