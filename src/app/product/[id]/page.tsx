"use client";

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useCart } from "../../../context/CartContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import CartIcon from "../../components/CartIcon";
import ReviewsSection from "@/app/components/ReviewsSection";

// Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
  useCdn: true, // Enable CDN for faster responses
});

// Image URL builder
const builder = imageUrlBuilder(client);
const urlFor = (source: { asset: { _ref: string } }) => builder.image(source);

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
  inventory: number;
  colors: string[];
};

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const productId = params.id;
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentInventory, setCurrentInventory] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null); // State to track selected color

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await client.fetch(
        `*[_type == "product" && _id == $id][0]`,
        { id: productId }
      );
      setProduct(fetchedProduct);
      setCurrentInventory(fetchedProduct?.inventory || 0);
    };

    fetchProduct();
  }, [productId]); // Ensure `productId` is the dependency

  const handleAddToCart = () => {
    if (product && currentInventory > 0) {
      setCurrentInventory(currentInventory - 1);
      addToCart({
        id: product._id,
        title: product.title,
        price: product.price,
        image: urlFor(product.image).url(), // Pass the full URL
        quantity: 1,
        colors: selectedColor ? [selectedColor] : [], // Pass selected color or empty array if no color
      });
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  // Generate URLs for images
  const mainImageUrl = product.image
    ? urlFor(product.image).width(500).height(680).url()
    : "/placeholder-image.png"; // Fallback if image is not present

  const thumbnailUrl = product.image
    ? urlFor(product.image).width(150).height(150).url()
    : "/placeholder-thumbnail.png"; // Fallback if image is not present

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-10 md:my-[50px]">
      {/* Header Section */}
      <div className="md:mx-auto flex flex-col md:flex-row justify-between mt-[20px] items-center w-full h-auto md:h-[40px] pt-4 px-4 fixed top-0 z-30">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
          <Link href="/">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
              Home
            </li>
          </Link>
          <Link href="/shop">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
              Shop
            </li>
          </Link>
          <Link href="/account">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
              Account
            </li>
          </Link>
          <Link href="/contact">
            <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
              Contact
            </li>
          </Link>
          <CartIcon />
        </ul>
      </div>

      {/* Background Section */}
      <div className="relative w-full md:w-[100%] h-[250px] md:h-[350px] mt-[10px]">
        <Image
          src="/images/Group 43.png"
          alt="insta"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4 md:px-0">
          <h1 className="text-[20px] md:text-[36px] font-bold">Product Details</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
            Home - Product Details
          </p>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-3 lg:mx-[120px] md:mt-[40px]">
        {/* Product Images */}
        <div className="md:col-span-3 flex space-x-6 lg:space-x-8">
          <div className="flex flex-col space-y-4 bg-[#FFF9E5]">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="relative group">
                <Image
                  src={thumbnailUrl}
                  alt={`${product.title} Thumbnail ${index + 1}`}
                  width={150}
                  height={150}
                  className="rounded-lg shadow-md object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">Thumbnail Chair {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex flex-col items-center bg-[#FFF9E5] group">
            <Image
              src={mainImageUrl}
              alt={product.title}
              width={350}
              height={380}
              className="rounded-lg shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Leather Executive Chair</p>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-6 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold text-[#000000]">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>

          {/* 5-star Rating */}
          <div className="flex space-x-1 mt-4">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6 text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <p className="text-xl font-semibold">Price: RS: {product.price}</p>
          {product.colors && product.colors.length > 0 && (
            <div>
              <span className="text-md font-medium">Colors:</span>
              <div className="flex mt-2 space-x-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-5 h-5 rounded-full cursor-pointer ${selectedColor === color ? "border-2 border-black" : ""}`}
                    style={{ backgroundColor: color }}
                    title={color}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>
          )}
          <p className="text-gray-800 font-medium">Stock Available: {currentInventory}</p>
          <button
            className="px-5 py-2 bg-[#000000] text-white rounded-lg hover:bg-gray-500"
            onClick={handleAddToCart}
            disabled={currentInventory <= 0}
          >
            {currentInventory > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
      <ReviewsSection/>
    </div>
  );
};

export default ProductDetailPage;


// "use client";

// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import { useCart } from "../../../context/CartContext";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import CartIcon from "../../components/CartIcon";
// import ReviewsSection from "@/app/components/ReviewsSection";

// // Sanity client setup
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
//   useCdn: false, // Enable CDN for faster responses
// });

// // Image URL builder
// const builder = imageUrlBuilder(client);
// const urlFor = (source: { asset: { _ref: string } }) => builder.image(source);

// export type Product = {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
//   inventory: number;
//   colors: string[];
// };

// const ProductDetailPage = ({ params }: { params: { id: string } }) => {
//   const productId = params.id;
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [currentInventory, setCurrentInventory] = useState<number>(0);
//   const [selectedColor, setSelectedColor] = useState<string | null>(null); // State to track selected color

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const fetchedProduct = await client.fetch(
//         `*[_type == "product" && _id == $id][0]`,
//         { id: productId }
//       );
//       setProduct(fetchedProduct);
//       setCurrentInventory(fetchedProduct?.inventory || 0);
//     };

//     fetchProduct();
//   }, [productId]); // Ensure `productId` is the dependency

//   const handleAddToCart = () => {
//     if (product && currentInventory > 0) {
//       setCurrentInventory(currentInventory - 1);
//       addToCart({
//         id: product._id,
//         title: product.title,
//         price: product.price,
//         image: urlFor(product.image).url(), // Pass the full URL
//         quantity: 1,
//         colors: selectedColor ? [selectedColor] : [], // Pass selected color or empty array if no color
//       });
//     }
//   };

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   // Generate URLs for images
//   const mainImageUrl = product.image
//     ? urlFor(product.image).width(500).height(680).url()
//     : "/placeholder-image.png"; // Fallback if image is not present

//   const thumbnailUrl = product.image
//     ? urlFor(product.image).width(150).height(150).url()
//     : "/placeholder-thumbnail.png"; // Fallback if image is not present

//   return (
//     <div className="max-w-screen-2xl mx-auto px-4 py-10 md:my-[50px]">
//       <div className="md:mx-auto flex flex-col md:flex-row justify-between mt-[20px] items-center w-full h-auto md:h-[40px] pt-4 px-4 fixed top-0 z-30">
//         {/* Center section with links */}
//         <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
//           <Link href="/">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Home
//             </li>
//           </Link>
//           <Link href="/shop">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Shop
//             </li>
//           </Link>
//           <Link href="/account">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Account
//             </li>
//           </Link>

//           <Link href="/contact">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Contact
//             </li>
//           </Link>
//           <CartIcon />
//         </ul>
//       </div>

//       <div className="relative w-full md:w-[100%] h-[250px] md:h-[350px] mt-[10px]">
//         {/* Background Image */}
//         <Image
//           src="/images/Group 43.png"
//           alt="insta"
//           layout="fill"
//           objectFit="cover"
//           className="object-cover"
//         />
//         {/* Text Overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4 md:px-0">
//           <h1 className="text-[20px] md:text-[36px] font-bold"> Product Details</h1>
//           <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
//             Home - Product Details
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-3 lg:mx-[120px] md:mt-[40px] ">
       
//         <div className="md:col-span-3 flex space-x-6 lg:space-x-8">
        
//           <div className="flex flex-col space-y-4 bg-[#FFF9E5]">
//   {/* Displaying the small image 3 times vertically with hover overlay */}
//   {[...Array(3)].map((_, index) => (
//     <div key={index} className="relative group">
//       {/* Small Image */}
//       <Image
//         src={thumbnailUrl}
//         alt={`${product.title} Thumbnail ${index + 1}`}
//         width={150}
//         height={150}
//         className="rounded-lg shadow-md object-cover"
//       />

//       {/* Hover Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//         <p className="text-white text-sm font-medium">Thumbnail Chair {index + 1}</p>
//       </div>
//     </div>
//   ))}
// </div>

// {/* 
//           <div className="flex flex-col items-center bg-[#FFF9E5]">
//             <Image
//               src={mainImageUrl}
//               alt={product.title}
//               width={350}
//               height={380}
//               className="rounded-lg shadow-md object-cover"
//             />
//           </div> */}
//           <div className="relative flex flex-col items-center bg-[#FFF9E5] group">
//   {/* Product Image */}
//   <Image
//     src={mainImageUrl}
//     alt={product.title}
//     width={350}
//     height={380}
//     className="rounded-lg shadow-md object-cover"
//   />

//   {/* Hover Overlay */}
//   <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//     <p className="text-white text-lg font-semibold">Leather Executive Chair</p>
//   </div>
// </div>
//         </div>

//         {/* Right Column - Product Details */}
//         <div className="md:col-span-2 flex flex-col justify-center space-y-6 mt-4 md:mt-0">
//           <h1 className="text-4xl font-bold text-[#000000]">{product.title}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="text-xl font-semibold">Price: RS: {product.price}</p>

//           {/* Display Colors */}
//           {product.colors && product.colors.length > 0 && (
//             <div>
//               <span className="text-md font-medium">Colors:</span>
//               <div className="flex mt-2 space-x-2">
//                 {product.colors.map((color, index) => (
//                   <div
//                     key={index}
//                     className={`w-5 h-5 rounded-full cursor-pointer ${selectedColor === color ? "border-2 border-black" : ""}`}
//                     style={{ backgroundColor: color }}
//                     title={color}
//                     onClick={() => setSelectedColor(color)} // Set color on click
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Inventory */}
//           <p className="text-gray-800  font-medium">Stock Available: {currentInventory}</p>

//           <button
//             className="px-5 py-2 bg-[#000000] text-white rounded-lg hover:bg-gray-500"
//             onClick={handleAddToCart}
//             disabled={currentInventory <= 0} // Disable if out of stock
//           >
//             {currentInventory > 0 ? "Add to Cart" : "Out of Stock"}
//           </button>
//         </div>
//       </div>
//       <ReviewsSection />
//     </div>
//   );
// };

// export default ProductDetailPage;



// "use client";

// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import { useCart } from "../../../context/CartContext";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import CartIcon from "../../components/CartIcon";

// // Sanity client setup
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
//   useCdn: true, // Enable CDN for faster responses
// });

// // Image URL builder
// const builder = imageUrlBuilder(client);
// const urlFor = (source: any) => builder.image(source);

// export type Product = {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
//   inventory: number;
//   colors: string[];
// };

// const ProductDetailPage = ({ params }: { params: { id: string } }) => {
//   const productId = params.id;
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [currentInventory, setCurrentInventory] = useState<number>(0);
//   const [selectedColor, setSelectedColor] = useState<string | null>(null); // State to track selected color

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const fetchedProduct = await client.fetch(
//         `*[_type == "product" && _id == $id][0]`,
//         { id: productId }
//       );
//       setProduct(fetchedProduct);
//       setCurrentInventory(fetchedProduct?.inventory || 0);
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleAddToCart = () => {
//     if (product && currentInventory > 0) {
//       setCurrentInventory(currentInventory - 1);
//       addToCart({
//         id: product._id,
//         title: product.title,
//         price: product.price,
//         image: urlFor(product.image).url(), // Pass the full URL
//         quantity: 1,
//         colors: selectedColor ? [selectedColor] : [], // Pass selected color or empty array if no color
//       });
//     }
//   };

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   // Generate URLs for images
//   const mainImageUrl = product.image
//     ? urlFor(product.image).width(500).height(680).url()
//     : "/placeholder-image.png"; // Fallback if image is not present

//   const thumbnailUrl = product.image
//     ? urlFor(product.image).width(150).height(150).url()
//     : "/placeholder-thumbnail.png"; // Fallback if image is not present

//   return (
//     <div className="max-w-screen-2xl mx-auto px-4 py-10 md:my-[50px]">
//       <div className="md:mx-auto flex flex-col md:flex-row justify-between mt-[20px] items-center w-full h-auto md:h-[40px] pt-4 px-4 fixed top-0 z-30">
//         {/* Center section with links */}
//         <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
//           <Link href="/">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Home
//             </li>
//           </Link>
//           <Link href="/shop">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Shop
//             </li>
//           </Link>
//           <Link href="/account">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Account
//             </li>
//           </Link>

//           <Link href="/contact">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Contact
//             </li>
//           </Link>
//           <CartIcon />
//         </ul>
//       </div>

//       <div className="relative w-full md:w-[100%] h-[250px] md:h-[350px] mt-[10px]">
//         {/* Background Image */}
//         <Image
//           src="/images/Group 43.png"
//           alt="insta"
//           layout="fill"
//           objectFit="cover"
//           className="object-cover"
//         />
//         {/* Text Overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4 md:px-0">
//           <h1 className="text-[20px] md:text-[36px] font-bold"> Product Details</h1>
//           <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
//             Home - Product Details
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-3 lg:mx-[120px] md:mt-[10px]">
//         {/* Left Column - Images */}
//         <div className="md:col-span-3 flex space-x-6 lg:space-x-8">
//           <div className="flex flex-col space-y-4">
//             {/* Displaying the small image 3 times vertically */}
//             {[...Array(3)].map((_, index) => (
//               <Image
//                 key={index}
//                 src={thumbnailUrl}
//                 alt={`${product.title} Thumbnail ${index + 1}`}
//                 width={150}
//                 height={150}
//                 className="rounded-lg shadow-md object-cover"
//               />
//             ))}
//           </div>

//           <div className="flex flex-col items-center">
//             <Image
//               src={mainImageUrl}
//               alt={product.title}
//               width={350}
//               height={380}
//               className="rounded-lg shadow-md object-cover"
//             />
//           </div>
//         </div>

//         {/* Right Column - Product Details */}
//         <div className="md:col-span-2 flex flex-col justify-center space-y-6 mt-4 md:mt-0">
//           <h1 className="text-4xl font-bold text-[#000000]">{product.title}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="text-xl font-semibold">Price: RS {product.price}</p>

//           {/* Display Colors */}
//           {product.colors && product.colors.length > 0 && (
//             <div>
//               <span className="text-md font-medium">Colors:</span>
//               <div className="flex mt-2 space-x-2">
//                 {product.colors.map((color, index) => (
//                   <div
//                     key={index}
//                     className={`w-5 h-5 rounded-full cursor-pointer ${
//                       selectedColor === color ? "border-2 border-black" : ""
//                     }`}
//                     style={{ backgroundColor: color }}
//                     title={color}
//                     onClick={() => setSelectedColor(color)} // Set color on click
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Inventory */}
//           <p className="text-green-700 font-medium">Inventory: {currentInventory}</p>

//           <button
//             className="px-5 py-2 bg-[#000000] text-white rounded-lg hover:bg-gray-800"
//             onClick={handleAddToCart}
//             disabled={currentInventory <= 0} // Disable if out of stock
//           >
//             {currentInventory > 0 ? "Add to Cart" : "Out of Stock"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;




// "use client";

// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import { useCart } from "../../../context/CartContext";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import CartIcon from "../../components/CartIcon";

// // Sanity client setup
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
//   useCdn: true, // Enable CDN for faster responses
// });

// // Image URL builder
// const builder = imageUrlBuilder(client);
// const urlFor = (source: any) => builder.image(source);

// export type Product = {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
//   inventory: number;
//   colors: string[];
// };

// const ProductDetailPage = ({ params }: { params: { id: string } }) => {
//   const productId = params.id;
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [currentInventory, setCurrentInventory] = useState<number>(0);
//   const [selectedColor, setSelectedColor] = useState<string | null>(null); // State to track selected color

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const fetchedProduct = await client.fetch(
//         `*[_type == "product" && _id == $id][0]`,
//         { id: productId }
//       );
//       setProduct(fetchedProduct);
//       setCurrentInventory(fetchedProduct?.inventory || 0);
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleAddToCart = () => {
//     if (product && currentInventory > 0 && selectedColor) {
//       setCurrentInventory(currentInventory - 1);
//       addToCart({
//         id: product._id,
//         title: product.title,
//         price: product.price,
//         image: urlFor(product.image).url(), // Pass the full URL
//         quantity: 1,
//         colors: [selectedColor], // Pass selected color
//       });
//     }
//   };

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   // Generate URLs for images
//   const mainImageUrl = product.image
//     ? urlFor(product.image).width(500).height(680).url()
//     : "/placeholder-image.png"; // Fallback if image is not present

//   const thumbnailUrl = product.image
//     ? urlFor(product.image).width(150).height(150).url()
//     : "/placeholder-thumbnail.png"; // Fallback if image is not present

//   return (
//     <div className="max-w-screen-2xl mx-auto px-4 py-10 md:my-[50px]">
//       <div className="md:mx-auto flex flex-col md:flex-row justify-between mt-[20px] items-center w-full h-auto md:h-[40px] pt-4 px-4 fixed top-0 z-30">
//         {/* Center section with links */}
//         <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
//           <Link href="/">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Home
//             </li>
//           </Link>
//           <Link href="/shop">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Shop
//             </li>
//           </Link>
//           <Link href="/account">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Account
//             </li>
//           </Link>

//           <Link href="/contact">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Contact
//             </li>
//           </Link>
//           <CartIcon />
//         </ul>
//       </div>

//       <div className="relative w-full md:w-[100%] h-[250px] md:h-[350px] mt-[10px]">
//         {/* Background Image */}
//         <Image
//           src="/images/Group 43.png"
//           alt="insta"
//           layout="fill"
//           objectFit="cover"
//           className="object-cover"
//         />
//         {/* Text Overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4 md:px-0">
//           <h1 className="text-[20px] md:text-[36px] font-bold"> Product Details</h1>
//           <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
//             Home - Product Details
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-3 lg:mx-[120px] md:mt-[10px]">
//         {/* Left Column - Images */}
//         <div className="md:col-span-3 flex space-x-6 lg:space-x-8">
//           <div className="flex flex-col space-y-4">
//             {/* Displaying the small image 3 times vertically */}
//             {[...Array(3)].map((_, index) => (
//               <Image
//                 key={index}
//                 src={thumbnailUrl}
//                 alt={`${product.title} Thumbnail ${index + 1}`}
//                 width={150}
//                 height={150}
//                 className="rounded-lg shadow-md object-cover"
//               />
//             ))}
//           </div>

//           <div className="flex flex-col items-center">
//             <Image
//               src={mainImageUrl}
//               alt={product.title}
//               width={350}
//               height={380}
//               className="rounded-lg shadow-md object-cover"
//             />
//           </div>
//         </div>

//         {/* Right Column - Product Details */}
//         <div className="md:col-span-2 flex flex-col justify-center space-y-6 mt-4 md:mt-0">
//           <h1 className="text-4xl font-bold text-[#000000]">{product.title}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="text-xl font-semibold">Price: RS {product.price}</p>

//           {/* Display Colors */}
//           {product.colors && product.colors.length > 0 && (
//             <div>
//               <span className="text-md font-medium">Colors:</span>
//               <div className="flex mt-2 space-x-2">
//                 {product.colors.map((color, index) => (
//                   <div
//                     key={index}
//                     className={`w-5 h-5 rounded-full cursor-pointer ${
//                       selectedColor === color ? "border-2 border-black" : ""
//                     }`}
//                     style={{ backgroundColor: color }}
//                     title={color}
//                     onClick={() => setSelectedColor(color)} // Set color on click
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Inventory */}
//           <p className="text-green-700 font-medium">Inventory: {currentInventory}</p>

//           <button
//             className="px-5 py-2 bg-[#000000] text-white rounded-lg hover:bg-gray-800"
//             onClick={handleAddToCart}
//             disabled={currentInventory <= 0 || !selectedColor} // Disable if no color is selected or out of stock
//           >
//             {currentInventory > 0 ? "Add to Cart" : "Out of Stock"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;



// "use client";

// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import { useCart } from "../../../context/CartContext";
// import { useState, useEffect } from "react";
// import { FaRegUser } from "react-icons/fa6";
// import { IoSearch } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa6";
// import Link from "next/link";
// import CartIcon from "../../components/CartIcon";

// // Sanity client setup
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
//   useCdn: true, // Enable CDN for faster responses
// });

// // Image URL builder
// const builder = imageUrlBuilder(client);
// const urlFor = (source: any) => builder.image(source);

// export type Product = {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
//   inventory: number;
//   colors: string[];
// };

// const ProductDetailPage = ({ params }: { params: { id: string } }) => {
//   const productId = params.id;
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [currentInventory, setCurrentInventory] = useState<number>(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const fetchedProduct = await client.fetch(
//         `*[_type == "product" && _id == $id][0]`,
//         { id: productId }
//       );
//       setProduct(fetchedProduct);
//       setCurrentInventory(fetchedProduct?.inventory || 0);
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleAddToCart = () => {
//     if (product && currentInventory > 0) {
//       setCurrentInventory(currentInventory - 1);
//       addToCart({
//         id: product._id,
//         title: product.title,
//         price: product.price,
//         image: urlFor(product.image).url(), // Pass the full URL
//         quantity: 1,
//         colors: product.colors,
//       });
//     }
//   };

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   // Generate URLs for images
//   const mainImageUrl = product.image
//     ? urlFor(product.image).width(500).height(680).url()
//     : "/placeholder-image.png"; // Fallback if image is not present

//   const thumbnailUrl = product.image
//     ? urlFor(product.image).width(150).height(150).url()
//     : "/placeholder-thumbnail.png"; // Fallback if image is not present

//   return (
//     <div className="max-w-screen-2xl mx-auto px-4 py-10  md:my-[50px]">
//          <div className=" md:mx-auto flex flex-col md:flex-row justify-between mt-[20px] items-center w-full h-auto md:h-[40px] pt-4 px-4 fixed top-0 z-30">
//         {/* Center section with links */}
//         <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
//           <Link href="/">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Home
//             </li>
//           </Link>
//           <Link href="/shop">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Shop
//             </li>
//           </Link>
//           <Link href="/account">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Account
//             </li>
//           </Link>
        
//           <Link href="/contact">
//             <li className="text-[14px] md:text-[18px] font-semibold hover:text-gray-400">
//               Contact
//             </li>
//           </Link>
//           <CartIcon />
//         </ul>

        
//       </div>

//       <div className=" relative w-full md:w-[100%] h-[250px] md:h-[350px] mt-[10px] ">
//         {/* Background Image */}
//         <Image
//           src="/images/Group 43.png"
//           alt="insta"
//           layout="fill"
//           objectFit="cover"
//           className="object-cover"
//         />
//         {/* Text Overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4 md:px-0">
//           <h1 className="text-[20px] md:text-[36px] font-bold">Our Products</h1>
//           <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
//             Home - Products
//           </p>
//         </div>
//       </div>
     


//       <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-3 lg:mx-[120px] md:mt-[10px]">
//         {/* Left Column - Images */}
//         <div className="md:col-span-3 flex space-x-6 lg:space-x-8">
//         <div className="flex flex-col space-y-4">
//             {/* Displaying the small image 3 times vertically */}
//             {[...Array(3)].map((_, index) => (
//               <Image
//                 key={index}
//                 src={thumbnailUrl}
//                 alt={`${product.title} Thumbnail ${index + 1}`}
//                 width={150}
//                 height={150}
//                 className="rounded-lg shadow-md object-cover"
//               />
//             ))}
//           </div>

//           <div className="flex flex-col items-center">
//             <Image
//               src={mainImageUrl}
//               alt={product.title}
//               width={350}
//               height={380}
//               className="rounded-lg shadow-md object-cover"
//             />
//           </div>
//         </div>

//         {/* Right Column - Product Details */}
//         <div className="md:col-span-2 flex flex-col justify-center space-y-6 mt-4 md:mt-0">
//           <h1 className="text-4xl font-bold text-[#000000]">{product.title}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="text-xl font-semibold">Price: RS {product.price}</p>

//           {/* Display Colors */}
//           {product.colors && product.colors.length > 0 && (
//             <div>
//               <span className="text-md font-medium">Colors:</span>
//               <div className="flex mt-2 space-x-2">
//                 {product.colors.map((color, index) => (
//                   <div
//                     key={index}
//                     className="w-5 h-5 rounded-full"
//                     style={{ backgroundColor: color }}
//                     title={color}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Inventory */}
//           <p className="text-green-700 font-medium">Inventory: {currentInventory}</p>

//           <button
//             className="px-5 py-2 bg-[#000000] text-white rounded-lg hover:bg-gray-800"
//             onClick={handleAddToCart}
//             disabled={currentInventory <= 0}
//           >
//             {currentInventory > 0 ? "Add to Cart" : "Out of Stock"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;








//This is my final code
// import { createClient } from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';
// import Image from 'next/image';

// // Sanity client setup
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
//   useCdn: false,
// });

// // Image URL builder
// const builder = imageUrlBuilder(client);
// const urlFor = (source: string) => builder.image(source);

// export type Product = {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// };

// const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
//   const productId = params.id;

//   // Fetch product data
//   const product = await client.fetch(
//     `*[_type == "product" && _id == $id][0]`,
//     { id: productId }
//   );

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const mainImageUrl = urlFor(product.image).width(500).height(680).url();
//   const thumbnailUrl = urlFor(product.image).width(150).height(150).url();

//   return (
//     <div className="max-w-screen-2xl mx-auto px-4 py-10 lg:mx-[120px] md:my-[50px]">
//       {/* Two-column layout */}
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-3">
//         {/* Left Column - Images */}
//         <div className="md:col-span-3 flex space-x-6 lg:space-x-8">
//           {/* Small Images - Vertically aligned */}
//           <div className="flex flex-col space-y-4">
//             <Image
//               src={thumbnailUrl}
//               alt={`${product.title} Thumbnail 1`}
//               width={150}
//               height={150}
//               className="rounded-lg shadow-md object-cover"
//             />
//             <Image
//               src={thumbnailUrl}
//               alt={`${product.title} Thumbnail 2`}
//               width={150}
//               height={150}
//               className="rounded-lg shadow-md object-cover"
//             />
//             <Image
//               src={thumbnailUrl}
//               alt={`${product.title} Thumbnail 3`}
//               width={150}
//               height={150}
//               className="rounded-lg shadow-md object-cover"
//             />
//           </div>

//           {/* Large Image */}
//           <div className="flex flex-col items-center ">
//             <Image
//               src={mainImageUrl}
//               alt={product.title}
//               width={350}
//               height={380}
//               className="rounded-lg shadow-md object-cover"
//             />
//           </div>
//         </div>

//         {/* Right Column - Product Details */}
//         <div className="md:col-span-2 flex flex-col justify-center space-y-6 mt-4 md:mt-0">
//           {/* Product Title */}
//           <h1 className="text-4xl font-bold text-[#000000]">{product.title}</h1>

//           {/* Product Price */}
//           <p className="text-3xl font-semibold text-[#B88E2F]">Rs:{product.price.toFixed(2)}</p>

//           {/* Stars Rating */}
//           <div className="flex space-x-1">
//             {[...Array(5)].map((_, index) => (
//               <span key={index} className="text-yellow-500">★</span>
//             ))}
//           </div>

//           {/* Product Description */}
//           <p className="text-lg text-gray-600">{product.description}</p>

//           {/* Color Options (Circles for color selection) */}
//           <div className="flex space-x-3"><p>Colors:</p>
//             <span className="w-6 h-6 rounded-full bg-[#816DFA] cursor-pointer"></span>
//             <span className="w-6 h-6 rounded-full bg-[#000000] cursor-pointer"></span>
//             <span className="w-6 h-6 rounded-full bg-[#CDBA7B] cursor-pointer"></span>
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             className="px-6 py-3 border border-gray-700 text-[#000000] font-medium rounded-lg hover:bg-[#000000] hover:text-white transition-all"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;














