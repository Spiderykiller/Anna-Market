// upload-images.js
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadedImages = [];

async function uploadFolder(folderPath, category) {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await uploadFolder(filePath, category);
    } else if (stat.isFile()) {
      console.log("Uploading:", filePath);

      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: `products/${category}`,
        });
        console.log(`✅ Uploaded ${category}/${file} => ${result.secure_url}`);
        uploadedImages.push({ category, filename: file, url: result.secure_url });
      } catch (err) {
        console.error("❌ Failed to upload:", file, err);
      }
    }
  }
}

async function main() {
  const basePath = path.join(__dirname, "../images"); 
  console.log("Images folder exists?", fs.existsSync(basePath));
  console.log("Contents:", fs.readdirSync(basePath));
  if (!fs.existsSync(basePath)) {
    console.error("❌ Images folder not found!");
    return;
  }

  const categories = fs.readdirSync(basePath).filter(f =>
    fs.statSync(path.join(basePath, f)).isDirectory()
  );

  for (const category of categories) {
    const categoryPath = path.join(basePath, category);
    await uploadFolder(categoryPath, category);
  }

  console.log("✅ All images uploaded!");
  console.log(uploadedImages);
}

main();

