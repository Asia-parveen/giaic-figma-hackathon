

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link'; 
import { useCart } from '../../context/CartContext'; 
import Image from 'next/image';
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import ShopSlider from '../components/ShopSlider';


const CartPage = () => {
  const { cartItems, removeFromCart, getTotal } = useCart();
  const [shipmentCharges] = useState(5.99); // Example shipment charges
  const [totalAmount, setTotalAmount] = useState(0); // Initialize totalAmount state

  // Calculate the total amount including shipment charges
  useEffect(() => {
    const total = getTotal() + shipmentCharges;
    setTotalAmount(total);
  }, [cartItems, shipmentCharges, getTotal]);

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4'>
        {/* Center section with links */}
        <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]'>
          <Link href="/"><li className='text-[14px] md:text-[16px] font-semibold'>Home</li></Link>
          <Link href="/shop"><li className='text-[14px] md:text-[16px] font-semibold'>Shop</li></Link>
          <Link href="#"><li className='text-[14px] md:text-[16px] font-semibold'>About</li></Link>
          <Link href="/contact"><li className='text-[14px] md:text-[16px] font-semibold'>Contact</li></Link>
        </ul>

        {/* Right section with icons */}
        <div className='flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold'>
          <FaRegUser className="text-base md:text-lg" />
          <Link href="/product"><IoSearch className="text-base md:text-lg" /></Link>
         <FaRegHeart className="text-base md:text-lg" />
         <Link href="/cart"><IoCartOutline className="text-base md:text-lg" /></Link>
        </div>
      </div>

       <div className="relative w-full h-[250px] md:h-[350px] mt-[30px]">
              {/* Background Image */}
              <Image
                src="/images/Group 43.png"
                alt="insta"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4">
                <h1 className="text-[20px] md:text-[36px] font-bold">Cart</h1>
                <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
                  Home - Cart
                </p>
              </div>
            </div>
    <div className="container mx-auto p-8">
      {/* <h1 className="text-3xl font-semibold text-center mb-8">My Cart</h1> */}

      {/* Cart Items */}
      <div className="flex flex-col space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              {/* Product Image */}
              <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="object-cover rounded-md"
                />
              </div>

              {/* Product Details */}
              <div className="w-full md:w-3/4">
                <div className="flex justify-between text-[#000000] font-bold mb-2 bg-[#FFF9E5] h-[50px] items-center">
                  <p className="w-1/4 text-center">Product</p>
                  <p className="w-1/4 text-center">Price</p>
                  <p className="w-1/4 text-center">Quantity</p>
                  <p className="w-1/4 text-center">Subtotal</p>
                </div>
                <div className="flex justify-between text-gray-800 font-medium">
                  <p className="w-1/4 text-center">{item.title}</p>
                  <p className="w-1/4 text-center">${item.price}</p>
                  <p className="w-1/4 text-center">{item.quantity}</p>
                  <p className="w-1/4 text-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Delete Button */}
              <div className="w-full md:w-auto flex justify-end mt-4 md:mt-0">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#B88E2F] hover:text-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-6 h-6"
                  >
                    <path d="M5.5 5.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5z" />
                    <path
                      fillRule="evenodd"
                      d="M14 4.5V5h-1v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5H2v-.5h3V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h3zM5 2v2h6V2H5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='font-semibold text-[18px]'>Your cart is empty.</p>
        )}
      </div>

      {/* Right Sidebar - Summary Card */}
      <div className="mt-8 flex justify-end">
        <div className="w-[300px] bg-[#FFF9E5] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-center">Cart Total</h3>
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Subtotal:</p>
            <p>${getTotal().toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Shipping Charges:</p>
            <p>${shipmentCharges.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-xl font-semibold">
            <p>Total:</p>
            <p className="text-[#B88E2F]">${totalAmount.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <Link
            href={{
              pathname: '/checkout', // Path to your checkout page
              query: {
                cartItems: JSON.stringify(cartItems), // Passing cart items as a query parameter
                totalAmount: totalAmount.toFixed(2),  // Passing total amount as a query parameter
              },
            }}
            className="border border-gray-900 border-rounded px-[20px] py-[5px] mt-[30px] font-bold text-gray-800 ml-[20px] rounded-lg block text-center"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
    <ShopSlider />
    </>
  );
};

export default CartPage;












// "use client"; // Ensure the page is treated as a client-side component
// import { useEffect, useState } from "react";
// import { useCart } from "../../context/CartContext"; // Adjust the import as needed
// import Image from "next/image";

// const CartPage = () => {
//   const { cartItems, removeFromCart, getTotal } = useCart();
//   const [shipmentCharges] = useState(5.99);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     const total = getTotal() + shipmentCharges;
//     setTotalAmount(total);
//   }, [cartItems, shipmentCharges, getTotal]); // Recalculate whenever cart changes

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-3xl font-semibold text-center mb-8">My Cart</h1>

//       {/* Cart Items */}
//       <div className="flex flex-col space-y-6">
//         {cartItems.length > 0 ? (
//           cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between"
//             >
//               {/* Product Image */}
//               <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={150}
//                   height={150}
//                   className="object-cover rounded-md"
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="w-full md:w-3/4">
//                 {/* Headings */}
//                 <div className="flex justify-between text-[#000000] font-bold mb-2 bg-[#FFF9E5] h-[50px] items-center">
//                   <p className="w-1/4 text-center ">Product</p>
//                   <p className="w-1/4 text-center">Price</p>
//                   <p className="w-1/4 text-center">Quantity</p>
//                   <p className="w-1/4 text-center">Subtotal</p>
//                 </div>

//                 {/* Values */}
//                 <div className="flex justify-between text-gray-800 font-medium">
//                   <p className="w-1/4 text-center">{item.title}</p>
//                   <p className="w-1/4 text-center">${item.price}</p>
//                   <p className="w-1/4 text-center">{item.quantity}</p>
//                   <p className="w-1/4 text-center">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </p>
//                 </div>
//               </div>

//               {/* Delete Button */}
//               <div className="w-full md:w-auto flex justify-end mt-4 md:mt-0">
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-[#B88E2F] hover:text-red-700"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     className="w-6 h-6"
//                   >
//                     <path d="M5.5 5.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5z" />
//                     <path
//                       fillRule="evenodd"
//                       d="M14 4.5V5h-1v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5H2v-.5h3V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h3zM5 2v2h6V2H5z"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Your cart is empty.</p>
//         )}
//       </div>

//       {/* Right Sidebar - Summary Card */}
//       <div className="mt-8 flex justify-end ">
//         <div className="w-[300px] bg-[#FFF9E5] p-6 rounded-lg shadow-lg">
//           <h3 className="text-xl font-bold mb-4 text-center ">Cart Total</h3>
//           <div className="flex justify-between mb-4">
//             <p className="font-semibold">Subtotal:</p>
//             <p>${getTotal().toFixed(2)}</p>
//           </div>
//           <div className="flex justify-between mb-4">
//             <p className="font-semibold">Shipping Charges:</p>
//             <p>${shipmentCharges.toFixed(2)}</p>
//           </div>
//           <div className="flex justify-between text-xl font-semibold">
//             <p >Total:</p>
//             <p className="text-[#B88E2F]">${totalAmount.toFixed(2)}</p>
          
//           </div>
//             <button className="border border-gray-800 border-rounded px-[28px] py-[5px] my-[20px] font-bold text-gray-800 ml-[60px] rounded-lg">Check Out</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;














// "use client"; // Make sure this line is uncommented

// import { useEffect, useState } from "react";
// import { useCart } from "../../context/CartContext"; // Correct path for useCart
// import Image from "next/image";

// const CartPage = () => {
//   const { cartItems, removeFromCart, getTotal } = useCart();
//   const [shipmentCharges] = useState(5.99);
//   const [totalAmount, setTotalAmount] = useState(0);

//   // Update total amount whenever cartItems or shipmentCharges change
//   useEffect(() => {
//     const total = getTotal() + shipmentCharges;
//     setTotalAmount(total);
//   }, [cartItems, shipmentCharges, getTotal]);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">My Cart</h1>

//       {/* Cart Items List */}
//       <div className="space-y-6">
//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex flex-col lg:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-lg"
//           >
//             {/* Left section: Image and product details */}
//             <div className="flex flex-col lg:flex-row items-center space-x-4 mb-4 lg:mb-0">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={150}
//                 height={150}
//                 className="object-cover rounded-md"
//               />
//               <div className="flex flex-col space-y-2">
//                 <h3 className="text-xl font-semibold">{item.title}</h3>
//                 <div className="flex space-x-4">
//                   <div>
//                     <p className="text-gray-500 font-medium">Price:</p>
//                     <p className="text-lg font-semibold">${item.price}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500 font-medium">Quantity:</p>
//                     <p className="text-lg font-semibold">{item.quantity}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right section: Shipping Charges, Subtotal, and Remove Button */}
//             <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
//               <div>
//                 <p className="text-gray-500 font-medium">Shipping Charges:</p>
//                 <p className="text-lg font-semibold">${shipmentCharges.toFixed(2)}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500 font-medium">Subtotal:</p>
//                 <p className="text-lg font-semibold">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-500 hover:text-red-700 text-lg"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Total and Final Calculation */}
//       <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
//         <div className="flex justify-between text-lg font-medium mb-4">
//           <p>Shipment Charges:</p>
//           <p>${shipmentCharges.toFixed(2)}</p>
//         </div>
//         <div className="flex justify-between text-xl font-semibold mb-4">
//           <p>Total:</p>
//           <p>${totalAmount.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;





// "use client";  // Make sure this line is uncommented
// import { useEffect, useState } from 'react';
// import { useCart } from '../../context/CartContext';  // Correct path for useCart
// import Image from 'next/image';

// const CartPage = () => {
//   const { cartItems, removeFromCart, getTotal } = useCart();
//   const [shipmentCharges] = useState(5.99);
//   const [totalAmount, setTotalAmount] = useState(0);

//   // Update total amount whenever cartItems or shipmentCharges change
//   useEffect(() => {
//     const total = getTotal() + shipmentCharges;
//     setTotalAmount(total);
//   }, [cartItems, shipmentCharges, getTotal]); // Dependency array

//   return (
//     <div>
//       <h1>My Cart</h1>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             <Image src={item.image} alt={item.title} width={50} height={50} />
//             <p>{item.title}</p>
//             <p>Price: ${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <p>Shipment Charges: ${shipmentCharges}</p>
//         <p>Total: ${totalAmount.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default CartPage;





// src/app/cart/page.tsx
//  "use client";

// import { useCart } from '../../context/CartContext';  // Correct path for useCart

// const CartPage = () => {
//   const { cartItems, removeFromCart, getTotal } = useCart(); // Hook usage here
//   const shipmentCharges = 5.99;
//   const totalAmount = getTotal() + shipmentCharges;

//   return (
//     <div>
//       <h1>My Cart</h1>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             <img src={item.image} alt={item.title} width={50} height={50} />
//             <p>{item.title}</p>
//             <p>Price: ${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <p>Shipment Charges: ${shipmentCharges}</p>
//         <p>Total: ${totalAmount.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default CartPage;



// import { useCart } from '../../context/CartContext'; ;
// import Image from "next/image";
// import Link from "next/link";

// const CartPage = () => {
//   const { cartItems, removeFromCart, getTotal } = useCart();
//   const shipmentCharges = 5.99; // Example static shipment charge
//   const totalAmount = getTotal() + shipmentCharges;




//   if (cartItems.length === 0) {
//     return <p>Your cart is empty.</p>;
//   }

//   return (
//     <div className="px-4 py-8 max-w-screen-2xl mx-auto">
//       <h1 className="text-3xl font-bold text-center my-12">My Cart</h1>
//       <div className="space-y-8">
//         {cartItems.map((item) => (
//           <div key={item.id} className="flex items-center space-x-4">
//             <Image src={item.image} alt={item.title} width={100} height={100} className="object-cover" />
//             <div className="flex-1">
//               <h3 className="text-lg font-semibold">{item.title}</h3>
//               <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
//               <p className="text-gray-600">Quantity: {item.quantity}</p>
//             </div>
//             <button
//               className="text-red-500 hover:text-red-700"
//               onClick={() => removeFromCart(item.id)}
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8">
//         <div className="flex justify-between text-lg font-semibold">
//           <span>Subtotal:</span>
//           <span>${getTotal().toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between text-lg font-semibold mt-2">
//           <span>Shipment Charges:</span>
//           <span>${shipmentCharges.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between text-lg font-semibold mt-2">
//           <span>Total:</span>
//           <span>${totalAmount.toFixed(2)}</span>
//         </div>
//         <Link href="/checkout">
//           <button className="mt-4 px-8 py-2 bg-black text-white rounded-md hover:bg-gray-800">
//             Proceed to Checkout
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CartPage;





