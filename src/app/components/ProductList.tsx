"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { Product } from "../product/page";
import { useState } from "react";

const ProductList = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  
  const [currentInventory, setCurrentInventory] = useState<number>(product.inventory);
  const [selectedColor, setSelectedColor] = useState<string | null>(null); // State for selected color

  const handleAddToCart = () => {
   
    if (currentInventory > 0) {
      setCurrentInventory(currentInventory - 1);
      addToCart({
        id: product._id,
        title: product.title,
        price: product.price,
        image: product.image.asset.url,
        quantity: 1,
        colors: selectedColor ? [selectedColor] : [], // Add selected color if chosen, else empty array
      });
    }
  };

  
  const price = !isNaN(product.price) ? product.price : 0;

  return (
   
    <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform lg:my-[20px] hover:scale-110 hover: border hover:border-[#FBEBB5] ">
      <Image
        src={product.image.asset.url}
        alt={product.title}
        width={200}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h2 className="text-base font-semibold truncate">{product.title}</h2>
        <p className="text-gray-600 font-medium mt-1">RS:{price.toFixed(2)}</p>

       
        {product.colors && product.colors.length > 0 && (
          <div className="mt-2">
            <span className="text-md font-medium">Colors:</span>
            <div className="flex mt-1 space-x-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full cursor-pointer border-2 ${selectedColor === color ? 'border-black' : ''}`}
                  style={{ backgroundColor: color }}
                  title={color} 
                  onClick={() => setSelectedColor(color)} // Set the selected color on click
                ></div>
              ))}
            </div>
          </div>
        )}

        {/* Display Inventory */}
        <div className="mt-2">
          <span className="text-md font-medium text-green-700">Inventory: </span>
          <span className="text-green-700">{currentInventory}</span>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <Link href={`/product/${product._id}`}>
            <span className="text-md text-blue-900 hover:underline font-semibold">
              View More
            </span>
          </Link>
          <button
            className="px-5 py-1 border border-gray-700 text-black rounded-md hover:bg-[#000000] hover:text-white hover:border-none"
            onClick={handleAddToCart}
            disabled={currentInventory <= 0} // Disable if inventory is 0
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "../../context/CartContext";
// import { Product } from "../product/page";
// import { useState } from "react";

// const ProductList = ({ product }: { product: Product }) => {
//   const { addToCart } = useCart();

//   // Create a state for inventory to manage it on the client-side
//   const [currentInventory, setCurrentInventory] = useState<number>(product.inventory);
//   const [selectedColor, setSelectedColor] = useState<string | null>(null); // State for selected color
//   const [quantity, setQuantity] = useState<number>(1); // State for quantity
//   const [subtotal, setSubtotal] = useState<number>(product.price); // State for subtotal

//   // Update subtotal whenever quantity or price changes
//   const handleQuantityChange = (newQuantity: number) => {
//     setQuantity(newQuantity);
//     setSubtotal(product.price * newQuantity);
//   };

//   const handleAddToCart = () => {
//     // Decrease inventory by the selected quantity when added to cart
//     if (currentInventory >= quantity) {
//       setCurrentInventory(currentInventory - quantity);
//       addToCart({
//         id: product._id,
//         title: product.title,
//         price: product.price,
//         image: product.image.asset.url,
//         quantity: quantity,
//         colors: selectedColor ? [selectedColor] : [], // Add selected color if chosen, else empty array
//       });
//     }
//   };

//   // Ensure product.price is a valid number
//   const price = !isNaN(product.price) ? product.price : 0;

//   // Ensure subtotal is a valid number before using toFixed
//   const validSubtotal = !isNaN(subtotal) ? subtotal : 0;

//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform lg:my-[20px]">
//       <Image
//         src={product.image.asset.url}
//         alt={product.title}
//         width={200}
//         height={200}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-3">
//         <h2 className="text-base font-semibold truncate">{product.title}</h2>
//         <p className="text-gray-600 font-medium mt-1">RS: {price.toFixed(2)}</p>

//         {/* Display Colors with color selection functionality */}
//         {product.colors && product.colors.length > 0 && (
//           <div className="mt-2">
//             <span className="text-md font-medium">Colors:</span>
//             <div className="flex mt-1 space-x-2">
//               {product.colors.map((color, index) => (
//                 <div
//                   key={index}
//                   className={`w-6 h-6 rounded-full cursor-pointer border-2 ${selectedColor === color ? 'border-black' : ''}`}
//                   style={{ backgroundColor: color }}
//                   title={color} // Optional: Show the color code as a tooltip
//                   onClick={() => setSelectedColor(color)} // Set the selected color on click
//                 ></div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Display Inventory */}
//         <div className="mt-2">
//           <span className="text-md font-medium text-green-700">Inventory: </span>
//           <span className="text-green-700">{currentInventory}</span>
//         </div>

//         {/* Quantity Input */}
//         <div className="mt-3 flex justify-between items-center">
//           <div>
//             <label className="text-md font-medium">Quantity:</label>
//             <input
//               type="number"
//               value={quantity}
//               min="1"
//               max={currentInventory}
//               onChange={(e) => handleQuantityChange(Number(e.target.value))}
//               className="ml-2 w-16 text-center border rounded-md px-2 py-1"
//             />
//           </div>
          
//           {/* Subtotal */}
//           <div className="text-md font-semibold">
//             <p>Subtotal: RS {validSubtotal.toFixed(2)}</p>
//           </div>
//         </div>

//         <div className="mt-3 flex justify-between items-center">
//           <Link href={`/product/${product._id}`}>
//             <span className="text-md text-blue-900 hover:underline font-semibold">
//               View More
//             </span>
//           </Link>
//           <button
//             className="px-5 py-1 border border-gray-700 text-black rounded-md hover:bg-[#000000] hover:text-white hover:border-none"
//             onClick={handleAddToCart}
//             disabled={currentInventory <= 0} // Disable if inventory is 0
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "../../context/CartContext";
// import { Product } from "../product/page";
// import { useState } from "react";

// const ProductList = ({ product }: { product: Product }) => {
//   const { addToCart } = useCart();

//   // Create a state for inventory to manage it on the client-side
//   const [currentInventory, setCurrentInventory] = useState<number>(product.inventory);
//   const [selectedColor, setSelectedColor] = useState<string | null>(null); // State for selected color

//   const handleAddToCart = () => {
//     // Decrease inventory by 1 when added to cart
//     if (currentInventory > 0) {
//       setCurrentInventory(currentInventory - 1);
//       addToCart({
//         id: product._id,
//         title: product.title,
//         price: product.price,
//         image: product.image.asset.url,
//         quantity: 1,
//         colors: selectedColor ? [selectedColor] : [], // Add selected color if chosen, else empty array
//       });
//     }
//   };

//   // Ensure product.price is a valid number
//   const price = !isNaN(product.price) ? product.price : 0;

//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform lg:my-[20px]">
//       <Image
//         src={product.image.asset.url}
//         alt={product.title}
//         width={200}
//         height={200}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-3">
//         <h2 className="text-base font-semibold truncate">{product.title}</h2>
//         <p className="text-gray-600 font-medium mt-1">RS:{price.toFixed(2)}</p>

//         {/* Display Colors with color selection functionality */}
//         {product.colors && product.colors.length > 0 && (
//           <div className="mt-2">
//             <span className="text-md font-medium">Colors:</span>
//             <div className="flex mt-1 space-x-2">
//               {product.colors.map((color, index) => (
//                 <div
//                   key={index}
//                   className={`w-6 h-6 rounded-full cursor-pointer border-2 ${selectedColor === color ? 'border-black' : ''}`}
//                   style={{ backgroundColor: color }}
//                   title={color} // Optional: Show the color code as a tooltip
//                   onClick={() => setSelectedColor(color)} // Set the selected color on click
//                 ></div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Display Inventory */}
//         <div className="mt-2">
//           <span className="text-md font-medium text-green-700">Inventory: </span>
//           <span className="text-green-700">{currentInventory}</span>
//         </div>

//         <div className="mt-3 flex justify-between items-center">
//           <Link href={`/product/${product._id}`}>
//             <span className="text-md text-blue-900 hover:underline font-semibold">
//               View More
//             </span>
//           </Link>
//           <button
//             className="px-5 py-1 border border-gray-700 text-black rounded-md hover:bg-[#000000] hover:text-white hover:border-none"
//             onClick={handleAddToCart}
//             disabled={currentInventory <= 0} // Disable if inventory is 0
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;




