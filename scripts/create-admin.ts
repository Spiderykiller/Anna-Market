import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
   
   console.log("🔄 Running create-admin script...");  // Add this line     // ... rest of your code   }
  const adminEmail = "beemnettilahun15@gmail.com";
  const adminName = "Admin";
  const adminPassword = "admin123"; // Change as needed
  const adminRole = "ADMIN";

  try {
    // 1️⃣ Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: adminEmail }, // Use Prisma field
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists:", {
        id: existingAdmin.id,
        email: existingAdmin.email,
        role: existingAdmin.role,
      });
      return;
    }

    // 2️⃣ Hash password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // 3️⃣ Create admin
    const admin = await prisma.user.create({
      data: {
        name: adminName,
        email: adminEmail,
        password: hashedPassword,
        role: adminRole,
      },
    });

    console.log("🎉 Admin created successfully:", {
      id: admin.id,
      email: admin.email,
      role: admin.role,
    });

  } catch (error) {
    console.error("❌ Error creating admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run script
main();
