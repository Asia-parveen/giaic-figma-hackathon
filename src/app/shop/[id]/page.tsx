"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import TopSection from "@/app/components/TopSection";

const ProductDetailPage = () => {
  const { id } = useParams();

  // Mock data - In real-world apps, you would fetch product details from an API or database
  const products = [
    {
      id: "1",
      image: "/images/bigsofs.png",
      name: "Trenton modular sofa_1",
      price: "Rs. 25,000.00",
      description:
        "Setting the bar as one of the loudest speakers in its class the  Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound."


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

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  if (!product) {
    return <div>Product not found</div>;
  }

 
  return (
<>
  <div className="flex flex-col md:flex-row justify-between items-start w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4 md:px-8 space-y-6 md:space-y-0 md:space-x-10 py-[30px]">
    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
      <Link href="/">
        <li className="text-[14px] md:text-[16px] font-semibold">Home</li>
      </Link>
      <Link href="/shop">
        <li className="text-[14px] md:text-[16px] font-semibold">Shop</li>
      </Link>
      <Link href="#">
        <li className="text-[14px] md:text-[16px] font-semibold">About</li>
      </Link>
      <Link href="/contact">
        <li className="text-[14px] md:text-[16px] font-semibold">Contact</li>
      </Link>
    </ul>

    <div className="flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold py-[10px]">
      <FaRegUser className="text-base md:text-lg" />
      <CiSearch className="text-base md:text-lg" />
      <CiHeart className="text-base md:text-lg" />
      <IoCartOutline className="text-base md:text-lg" />
    </div>
  </div>
  <div className="flex md:pt-[5rem] pl-4 md:pl-[9rem] gap-4 py-[40px]">
    <p className="text-[#000000] opacity-[0.5] text-[16px] font-bold">Home  </p><span className="text-[18px]">{">"} </span>
    <p className="text-[#000000] opacity-[0.5] text-[18px] font-bold">Shop </p><span className="text-[18px] font-bold">{">"} </span>
    <p className="text-[#000000] text-[18px] font-bold"><span className="text-[18px] font-bold opacity-[0.5] mr-[20px]">{"|"} </span> Asgaard sofa</p>
  </div>

  <div className="flex flex-col md:flex-row lg:pt-[120px] border-b-2 border-gray-200 max-w-screen-3xl space-y-6  lg:py-[20px]   md:space-y-0 md:space-x-6 px-[20px]">
    <div className="lg:w-[700px] lg:h-[450px] bg-[#FFF9E5] flex justify-center items-center p-3 md:p-4 ">
      <Image
        src={product.image}
        alt={product.name}
        width={900}
        height={600}
        className="rounded-lg lg:pt-[120px]  lg:mr-[120px]"
      />
    </div>

    <div className="md:w-[400px] md:h-[500px] ml-4 lg:ml-[70px] space-y-4 px-4 md:px-6 py-9">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <h2 className="text-lg font-bold mt-2 opacity-[0.5]">{product.price}</h2>
      <p className="mt-4 text-gray-900 text-[14px]">{product.description}</p>

      {/* Size Options */}
      <div className="mt-4">
        <h3 className="font-semibold opacity-[0.5] mb-4">Size</h3>
        <div className="flex space-x-4">
          <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer bg-[#FBEBB5] text-[14px]">L</div>
          <div className="w-[30px] h-[30px] justify-center items-center cursor-pointer bg-[#FAF4F4] text-[14px]">XL</div>
          <div className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer bg-[#FAF4F4] text-[14px]">XS</div>
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

      {/* Quantity Selector */}
      <div className="mt-4 flex items-center space-x-2">
        <div className="border-2 border-gray-300 rounded-lg w-20 py-[7px]">
          <button onClick={handleDecrement} className="px-3 py-1 rounded-lg">-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement} className="px-3 py-1 rounded-md">+</button>
        </div>
        <button className="px-6 py-2 text-[#000000] rounded-lg w-30 border-2 border-gray-600 ml-[20px]">
          Add to Cart
        </button>
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
      Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
    </p>
    <p className="text-[16px] opacity-[0.5] px-[20px]">
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
    </p>
  </div>

  <div className="flex  lg:flex-row lg:cols-2 md:px-[8rem] md:pb-[50px] gap-9 px-[20px] py-[20px]">
  <div className="w-full lg:w-1/2">
    <Image
      src="/images/img1.png"
      alt="sofa"
      width={520}
      height={350}
      className="rounded-lg"
    />
  </div>
  <div className="w-full lg:w-1/2">
    <Image
      src="/images/img2.png"
      alt="sofa"
      width={520}
      height={350}
      className="rounded-lg"
    />
  </div>
</div>


  <TopSection />
</>





  );
};

export default ProductDetailPage;



