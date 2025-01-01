
"use client";


import { useParams } from "next/navigation";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

import TopSection from "@/app/components/TopSection";
import Link from "next/link";
 import { FaRegUser } from "react-icons/fa6";
 import { IoSearch } from "react-icons/io5";
 import { FaRegHeart } from "react-icons/fa6";



const ProductDetailPage = () => {


  const { id } = useParams();

  
  const products = [
    {
      id: "1",
      image: "/images/bigsofs.png",
      name: "Trenton modular sofa_1",
      price: "Rs. 25,000.00",
      description:
        "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
        quantity:1,



    },
    {
      id: "2",
      image: "/images/chair 1.png",
      name: "Trenton modular sofa_2",
      price: "Rs. 28,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "3",
      image: "/images/Mask group (5).png",
      name: "Trenton modular sofa_3",
      price: "Rs. 30,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "4",
      image: "/images/chair3.png",
      name: "Trenton modular sofa_4",
      price: "Rs. 32,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "5",
      image: "/images/Mask group (2).png",
      name: "Trenton modular sofa_5",
      price: "Rs. 25,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "6",
      image: "/images/tb1.png",
      name: "Trenton modular sofa_6",
      price: "Rs. 28,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "7",
      image: "/images/Mask group (1).png",
      name: "Trenton modular sofa_7",
      price: "Rs. 30,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "8",
      image: "/images/lsttb.png",
      name: "Trenton modular sofa_8",
      price: "Rs. 32,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "9",
      image: "/images/smptb.png",
      name: "Trenton modular sofa_9",
      price: "Rs. 25,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "10",
      image: "/images/sidtb.png",
      name: "Trenton modular sofa_10",
      price: "Rs. 28,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "11",
      image: "/images/grdntb.png",
      name: "Trenton modular sofa_11",
      price: "Rs. 30,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "12",
      image: "/images/Mask group (7).png",
      name: "Trenton modular sofa_12",
      price: "Rs. 32,000.00",
      description:
        "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound."
    },
    {
      id: "13",
      image: "/images/smptb.png",
      name: "Trenton modular sofa_13",
      price: "Rs. 25,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "14",
      image: "/images/sofaset.png",
      name: "Trenton modular sofa_14",
      price: "Rs. 28,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "15",
      image: "/images/lrgsofa.png",
      name: "Trenton modular sofa_15",
      price: "Rs. 30,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
    {
      id: "16",
      image: "/images/Outdoor.png",
      name: "Trenton modular sofa_16",
      price: "Rs. 32,000.00",
      description:
      "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    },
  ];


  const product = products.find((p) => p.id === id);





  if (!product) {
    return <div>Product not found</div>;
  }

 

  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly items-start w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4 md:px-8 space-y-6 md:space-y-0 md:space-x-10  ">
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

     <div className="flex space-x-4 md:space-x-8 mt-4 md:mt-0 text-[16px] font-bold py-[10px] ">
       <FaRegUser className="text-base md:text-lg hover:text-gray-400" />
        <IoSearch className="text-base md:text-lg hover:text-gray-400" />
       <FaRegHeart className="text-base md:text-lg hover:text-gray-400" />
       <IoCartOutline className="text-base md:text-lg hover:text-gray-400" />
     </div>
   </div>
   <div className="flex md:pt-[5rem] pl-4 md:pl-[9rem] gap-4 py-[40px]">
     <p className="text-[#000000] opacity-[0.5] text-[16px] font-bold">Home  </p><span className="text-[18px]">{">"} </span>
     <p className="text-[#000000] opacity-[0.5] text-[18px] font-bold">Shop </p><span className="text-[18px] font-bold">{">"} </span>
     <p className="text-[#000000] text-[18px] font-bold"><span className="text-[18px] font-bold opacity-[0.5] mr-[20px]">{"|"} </span> Asgaard sofa</p>
   </div>

    {/* <div className="relative"> */}
      {/* Overlay */}
    

      {/* Sidebar */}
      {/* <div
        className={`fixed top-0 right-0 w-80 bg-white shadow-lg h-full z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      > */}
        {/* <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Shooping Cart</h2>
           <button onClick={toggleSidebar} className="text-md font-bold text-[#000000]">
            <AiOutlineClose />
          </button> 
        </div> */}
        {/* <div className="p-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500">Your cart is empty</div>
          ) : (
            cart.map((cartItem) => (
              <div key={cartItem.id} className="flex space-x-4 items-center relative">
                <Image
                  src={cartItem.image}
                  alt={cartItem.name}
                  width={80}
                  height={80}
                  className="rounded"
                /> */}
                {/* <div className="flex-1">
                  <h3 className="text-lg font-bold py-[10px]">{cartItem.name}</h3>

                  <p className="text-sm text-gray-500">Price: {cartItem.price}</p>
                  <p className="text-sm  py-[10px] text-[#B88E2F]">
                    Quantity: {cartItem.quantity} x {cartItem.price}
                  </p>
                </div> */}
                {/* Edit Icon */}
                {/* <button
                  onClick={() => editProduct(cartItem.id)}
                  className="absolute top-0 right-6  text-gray-500 hover:text-blue-500"
                >
                  <IoCartOutline className="text-gray-500" />
                </button> */}
                {/* Delete Icon */}
                {/* <button
                  onClick={() => removeFromCart(cartItem.id)}
                  className="absolute top-0 right-0 text-gray-500 hover:text-gray-800 "
                >
                  <AiOutlineClose className="text-gray-500" />
                </button> */}
              {/* </div> */}
             
           
          {/* <hr className="my-4" /> */}
          {/* <div className="mt-[16rem]">
          <div className="flex justify-between text-lg font-semibold pb-[30px]">
            <span>Subtotal:</span>

            <span className="text-[#B88E2F]">RS:  
               {cart.reduce(
                (total, item) =>
                  total +
                  parseFloat(item.price.replace("Rs. ", "").replace(",", "")),
                0
              )}
            </span>
            <hr className="my-4" />
          </div>

          <div className=" flex space-x-2 ">
            <button className="w-1/2  text-[#000000] py-[4px] rounded-3xl border-2 border-gray-500">
             <Link href="/cart"> View Cart</Link>
            </button>
            <button className="w-1/2  text-[#000000]  py-2 rounded-3xl  border-2 border-gray-500">
              Checkout
            </button>
          </div>
          </div> */}
        {/* </div> */}
      {/* </div> */}

      {/* Main Content */}
      <div
       
      >
        {/* Product Details */}
        <div className="flex flex-col md:flex-row lg:pt-[20px] border-b-2 border-gray-200 max-w-screen-3xl space-y-6 lg:py-[20px] md:space-y-0 md:space-x-12 px-[20px]">
          <div className="lg:w-[700px] lg:h-[450px] bg-[#FFF9E5] flex justify-center items-center p-3 md:p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={900}
              height={600}
              className="rounded-lg lg:pt-[120px] lg:mr-[120px]"
            />
          </div>

          <div className="md:w-[400px] md:h-[500px] ml-4 lg:ml-[30px] space-y-4 px-4 md:pl-10 py-9">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <h2 className="text-lg font-bold mt-2 opacity-[0.5]">
              {product.price}
            </h2>
            <p className="mt-4 text-gray-900 text-[14px]">{product.description}</p>

            <div className="mt-4">
              <h3 className="font-semibold opacity-[0.5] mb-4">Size</h3>
              <div className="flex space-x-4">
                <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer bg-[#FBEBB5] text-[14px]">
                  L
                </div>
                <div className="w-[30px] h-[30px] justify-center items-center cursor-pointer bg-[#FAF4F4] text-[14px]">
                  XL
                </div>
                <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer bg-[#FAF4F4] text-[14px]">
                  XS
                </div>
              </div>
            </div>
                  {/* Color Options */}
      <div className="mt-4">
        <h3 className="font-semibold mb-4 opacity-[0.5]">Color</h3>
        <div className="flex space-x-4">
          <div className="w-6 h-6 bg-[#816DFA] rounded-full cursor-pointer"></div>
          <div className="w-6 h-6 bg-[#000000] rounded-full cursor-pointer"></div>
          <div className="w-6 h-6 bg-[#CDBA7B] rounded-full cursor-pointer"></div>
        </div>
      </div>

            {/* Quantity Selector
            <div className="mt-4 flex items-center space-x-2">
        <div className="border-2 border-gray-300 rounded-lg w-20 py-[7px]">
          <button onClick={handleDecrement}className="px-3 py-1 rounded-lg">-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement} className="px-3 py-1 rounded-md">+</button>
        </div>
        <button onClick={addToCart} className="px-6 py-2 text-[#000000] rounded-lg w-30 border-2 border-gray-600 ml-[20px]">
          Add to Cart
        </button>
      </div> */}
    </div>
  </div>

          </div>
    
        <div className="flex md:py-[50px] justify-center lg:gap-[5rem] flex-wrap py-[30px]">
    <h1 className="text-[24px] text-[#000000] font-semibold">Description</h1>
    <h1 className="text-[24px] text-[#000000] font-semibold opacity-[0.5]">Additional Information</h1>
    <h1 className="text-[24px] text-[#000000] font-semibold opacity-[0.5]">Reviews [5]</h1>
  </div>
  <div className="lg:px-[9rem] py-4 sm:px-[20px]">
    <p className="text-[14px] lg:text-[16px] opacity-[0.5] px-[20px]">
      Embodying the raw, wayward spirit of rock and roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
    </p><br></br>
    <p className="text-[16px] opacity-[0.5] px-[20px]">
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
    </p>
  </div>
  <div className="flex flex-col lg:flex-row lg:cols-2 md:px-[8rem] md:pb-[50px] gap-9 px-[20px] py-[20px]">
  <div className="w-full">
    <Image
      src="/images/img1.png"
      alt="sofa"
      width={520}
      height={350}
      className="rounded-lg w-full"
    />
  </div>
  <div className="w-full">
    <Image
      src="/images/img2.png"
      alt="sofa"
      width={520}
      height={350}
      className="rounded-lg w-full"
    />
  </div>
</div>


      <TopSection />
   
    </>
  );
};

export default ProductDetailPage;



















