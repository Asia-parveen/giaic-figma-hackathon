"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { IoSearch, IoCartOutline } from "react-icons/io5";

const ProductDetailPage = () => {
  const { id } = useParams();

  const products = [
    {
      id: "1",
      image: "/images/bigsofs.png",
      name: "Trenton modular sofa_1",
      price: "Rs. 25,000.00",
      description: "Detailed description here.",
    },
    {
      id: "2",
      image: "/images/chair1.png",
      name: "Trenton modular sofa_2",
      price: "Rs. 28,000.00",
      description: "Detailed description here.",
    },
    // Add the rest of your products here.
  ];

  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  if (!product) {
    console.error("Product not found for ID:", id);
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <Link href="/">Back to Home</Link>
      <div className="flex space-x-4">
        <Image src={product.image} alt={product.name} width={500} height={500} />
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <p className="text-xl font-semibold">{product.price}</p>
          <div className="flex items-center mt-4 space-x-4">
            <button onClick={handleDecrement} className="bg-gray-200 px-4 py-2">-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement} className="bg-gray-200 px-4 py-2">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
