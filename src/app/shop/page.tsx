import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Slider from '../components/Slider';
import ShopTop from '../components/ShopTop';
import ShopSlider from '../components/ShopSlider';

const ShopPage = () => {
  return (
    <div>
          <div className='flex flex-col md:flex-row justify-between items-center  w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4'>
        {/* Center section with links */}
        <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]'>
          <Link href="/"><li className='text-[14px] md:text-[16px] font-semibold'>Home</li></Link>
          <Link href="/shop"><li className='text-[14px] md:text-[16px] font-semibold'>Shop</li></Link>
          <Link href="#"><li className='text-[14px] md:text-[16px] font-semibold'>About</li></Link>
          <Link href="#"><li className='text-[14px] md:text-[16px] font-semibold'>Contact</li></Link>
        </ul>

        {/* Right section with icons */}
        <div className='flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold'>
          <FaRegUser className="text-base md:text-lg" />
          <CiSearch className="text-base md:text-lg" />
          <CiHeart className="text-base md:text-lg" />
          <IoCartOutline className="text-base md:text-lg" />
        </div>
      </div>
      <div className="relative w-full h-[350px] mt-[30px]">
        {/* Background Image */}
        <Image
          src="/images/Group 43.png"
          alt="insta"
          layout="fill" // Fills the parent container
          objectFit="cover" // Ensures the image covers the container
          className="object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000]px-4">
          <h1 className="text-[24px] md:text-[36px] font-bold">Shop</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2 font-semibold">
            Home - Shop
          </p>
         
        </div>
      </div>
      <Slider/>
      <ShopTop/>
      <ShopSlider/>
    </div>
  )
}

export default ShopPage;
