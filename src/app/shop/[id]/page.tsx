"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import TopSection from "@/app/components/TopSection";

const ProductDetailPage = () => {
  const { id } = useParams();

  const products = [
    {
      id: "1",
      image: "/images/bigsofs.png",
      name: "Trenton modular sofa_1",
      price: "Rs. 25,000.00",
      description:
        "Setting the bar as one of the loudest speakers in its class the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    // ... (other products)
  ];

  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      {/* Navigation */}
      <div className="flex flex-col md:flex-row justify-evenly items-start w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4 md:px-8 space-y-6 md:space-y-0 md:space-x-10">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[20%]">
          <Link href="/">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Home</li>
          </Link>
          <Link href="/shop">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Shop</li>
          </Link>
          <Link href="/product">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Product</li>
          </Link>
          <Link href="/account">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Account</li>
          </Link>
          <Link href="/contact">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">Contact</li>
          </Link>
        </ul>

        <div className="flex space-x-4 md:space-x-8 mt-4 md:mt-0 text-[16px] font-bold py-[10px]">
          <FaRegUser className="text-base md:text-lg hover:text-gray-400" />
          <IoSearch className="text-base md:text-lg hover:text-gray-400" />
          <FaRegHeart className="text-base md:text-lg hover:text-gray-400" />
          <IoCartOutline className="text-base md:text-lg hover:text-gray-400" />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex md:pt-[5rem] pl-4 md:pl-[9rem] gap-4 py-[40px]">
        <Image src={product.image} alt={product.name} width={500} height={500} />
        <div className="flex flex-col">
          <h1 className="text-[24px] font-bold">{product.name}</h1>
          <p className="text-[16px] opacity-70">{product.description}</p>
          <p className="text-[20px] font-semibold">{product.price}</p>
          <div className="flex items-center space-x-4 mt-4">
            <button onClick={handleDecrement} className="px-4 py-2 bg-gray-200 rounded">-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement} className="px-4 py-2 bg-gray-200 rounded">+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
