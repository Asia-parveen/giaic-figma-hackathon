// components/CartIcon.tsx
"use client";

import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

const CartIcon = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/cart">
      <div className="relative">
        <MdOutlineShoppingCart className="text-base md:text-xl hover:text-gray-400" />
        {totalQuantity > 0 && (
          <span className="absolute top-0 right-0 text-sm bg-red-500 text-white rounded-full w-3 h-3 flex items-center justify-center">
            {totalQuantity}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;



// import { MdOutlineShoppingCart } from "react-icons/md";
// import { useCart } from "../../context/CartContext";
// import Link from "next/link";

// const CartIcon = () => {
//   const { cartItems } = useCart();
//   const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <Link href="/cart">
//       <div className="relative">
//         <MdOutlineShoppingCart className="text-base md:text-xl hover:text-gray-400" />
//         {totalQuantity > 0 && (
//           <span className="absolute top-0 right-0 text-sm bg-red-500 text-white rounded-full w-3 h-3 flex items-center justify-center">
//             {totalQuantity}
//           </span>
//         )}
//       </div>
//     </Link>
//   );
// };

// export default CartIcon;





// import { MdOutlineShoppingCart } from "react-icons/md";
// import { useCart } from "../../context/CartContext";
// import Link from "next/link";

// const CartIcon = () => {
//   const { cartItems } = useCart();
//   const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <Link href="/cart">
//       <div className="relative">
//         <MdOutlineShoppingCart className="text-base md:text-xl hover:text-gray-400" />
//         {totalQuantity > 0 && (
//           <span className="absolute top-0 right-0 text-sm bg-red-500 text-white rounded-full w-3 h-3 flex items-center justify-center">
//             {totalQuantity}
//           </span>
//         )}
//       </div>
//     </Link>
//   );
// };

// export default CartIcon;




