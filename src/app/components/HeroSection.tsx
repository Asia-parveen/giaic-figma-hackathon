


"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#FBEBB5] w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4">
        {/* Hamburger Menu */}
        <div className="md:hidden flex justify-between items-center w-full">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex md:flex-row md:space-x-10 md:ml-[35%] text-center">
          <Link href="/" passHref>
            <li className="text-[14px] md:text-[16px] font-semibold cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="/shop" passHref>
            <li className="text-[14px] md:text-[16px] font-semibold cursor-pointer">
              Shop
            </li>
          </Link>
          <Link href="/about" passHref>
            <li className="text-[14px] md:text-[16px] font-semibold cursor-pointer">
              About
            </li>
          </Link>
          <Link href="/contact" passHref>
            <li className="text-[14px] md:text-[16px] font-semibold cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>

        {/* Right Section Icons */}
        <div className="hidden md:flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold">
          <FaRegUser className="text-base md:text-lg" />
          <CiSearch className="text-base md:text-lg" />
          <CiHeart className="text-base md:text-lg" />
          <IoCartOutline className="text-base md:text-lg" />
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-20 flex flex-col justify-center items-center space-y-6">
          <Link href="/" passHref>
            <div
              className="text-white text-[18px] font-semibold cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </div>
          </Link>
          <Link href="/shop" passHref>
            <div
              className="text-white text-[18px] font-semibold cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </div>
          </Link>
          <Link href="/about" passHref>
            <div
              className="text-white text-[18px] font-semibold cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              About
            </div>
          </Link>
          <Link href="/contact" passHref>
            <div
              className="text-white text-[18px] font-semibold cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </div>
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row bg-[#FBEBB5] h-auto lg:h-[100vh] justify-center items-center px-4">
        {/* Text Content */}
        <div className="text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-[24px] md:text-[36px] lg:text-[64px] font-semibold text-[#000000]">
            Rocket single
            <br /> seater
          </h1>
          <Link href="/shop" passHref>
            <p className="text-[14px] md:text-[16px] font-semibold text-[#000000] inline-block relative mt-2">
              Shop Now
              <span className="block w-full h-[2px] bg-black mt-1"></span>
            </p>
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-6 lg:mt-0">
          <Image
            src="/images/seater1.png"
            alt="Rocket Seater"
            width={400}
            height={300}
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;





