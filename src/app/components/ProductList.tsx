








"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { Product } from "../product/page";

const ProductList= ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      image: product.image.asset.url,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform lg:my-[20px]">
      <Image
        src={product.image.asset.url}
        alt={product.title}
        width={200}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h2 className="text-base font-semibold truncate">{product.title}</h2>
        <p className="text-gray-600 font-medium mt-1">
          ${product.price.toFixed(2)}
        </p>
        <div className="mt-3 flex justify-between items-center">
          <Link href={`/product/${product._id}`}>
            <span className="text-sm text-blue-900 hover:underline font-semibold">
              View More
            </span>
          </Link>
          <button
            className="px-5 py-1 border border-gray-700 text-black rounded-md hover:bg-[#000000] hover:text-white hover:border-none"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
