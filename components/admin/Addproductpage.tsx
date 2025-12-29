"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [price, setPrice] = useState<number | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        category,
        images: images.map((file) => file.name), // replace with actual uploaded URLs
        price: price === "" ? undefined : price,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          type="file"
          multiple
          onChange={(e) =>
            setImages(e.target.files ? Array.from(e.target.files) : [])
          }
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Product
        </button>
      </form>
    </div>
  );
}
