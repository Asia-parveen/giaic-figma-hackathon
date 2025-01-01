import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa"; // Correct imports for used icons
import ShopSlider from "../components/ShopSlider";

const ContactPage = () => {
  return (
    <>
      {/* Navigation Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4">
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
          <Link href="/product">
            <li className="text-[14px] md:text-[16px] font-semibold">Products</li>
          </Link>
          <Link href="/">
            <li className="text-[14px] md:text-[16px] font-semibold">
              Contact
            </li>
          </Link>
        </ul>
      </div>

      {/* Banner Section */}
      <div className="relative w-full h-[350px] mt-[30px]">
        <Image
          src="/images/Group 43.png"
          alt="insta"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black px-4">
          <h1 className="text-[24px] md:text-[36px] font-bold">Contact</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2 font-semibold">
            Home - Contact
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="text-center md:pt-[40px]">
        <h1 className="text-[24px] md:text-[36px] font-semibold">
          Get In Touch With Us
        </h1>
        <p className="opacity-[0.5] max-w-[600px] mx-auto text-[14px] pt-[10px]">
          Find a bright ideal to suit your taste with our great selection of{" "}
          <br />
          suspension, floor, and table lights.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:gap-[50px] px-4  py-8">
        {/* Address Section */}
        <div className="w-full lg:w-[20%] flex flex-col  space-y-8 lg:pl-[20px]">
          <div className="flex items-center text-center space-x-4">
            <IoLocationSharp className="text-xl text-gray-700" />
            <div>
              <h1 className="text-lg font-bold text-gray-800 mb-1">Address</h1>
              <p className="text-sm text-gray-600">
                236 5th SE Avenue,
                <br /> New York NY10000
                <br /> United States
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-xl text-gray-700" />
            <div>
              <h1 className="text-lg font-bold text-gray-800 mb-1">Phone</h1>
              <p className="text-sm text-gray-600">
                Mobile: 32343-54-54
                <br /> Hotline: 32343-54-54
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <IoIosTime className="text-xl text-gray-700" />
            <div>
              <h1 className="text-lg font-bold text-gray-800 mb-1">
                Working Time
              </h1>
              <p className="text-sm text-gray-600">
                Morning: 3 hours
                <br /> Evening: 3 hours
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[40%] flex flex-col space-y-6 mt-8  lg:pb-[10px]">
          <label className="w-full">
            <span className="block text-sm font-medium mb-1">Your Name</span>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 lg:py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </label>
          <label className="w-full">
            <span className="block text-sm font-medium mb-1">
              Email Address
            </span>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </label>
          <label className="w-full">
            <span className="block text-sm font-medium mb-1">Subject</span>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </label>
          <label className="w-full">
            <span className="block text-sm font-medium mb-1">Your Message</span>
            <textarea
              placeholder="Hi, I would like to ask you..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
              rows={5}
            ></textarea>
          </label>
          <button className="w-[170px] h-[40px] border-2 border-gray-300 text-gray-500 font-semibold rounded-lg">
            Submit
          </button>
        </div>
      </div>
      <ShopSlider/>
    </>
  );
};

export default ContactPage;

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FaRegUser } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";
// // import Slider from '../components/Slider';
// // import ShopTop from '../components/ShopTop';
// // import ShopSlider from '../components/ShopSlider';
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoIosTime } from "react-icons/io";

// const ContactPage = () => {
//   return (
//     <>
//     <div>
//         <div className='flex flex-col md:flex-row justify-between items-center  w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4'>
//         {/* Center section with links */}
//         <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]'>
//           <Link href="/"><li className='text-[14px] md:text-[16px] font-semibold'>Home</li></Link>
//           <Link href="/"><li className='text-[14px] md:text-[16px] font-semibold'>Shop</li></Link>
//           <Link href="#"><li className='text-[14px] md:text-[16px] font-semibold'>About</li></Link>
//           <Link href="#"><li className='text-[14px] md:text-[16px] font-semibold'>Contact</li></Link>
//         </ul>

//         {/* Right section with icons */}
//         <div className='flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold'>
//           <FaRegUser className="text-base md:text-lg" />
//           <CiSearch className="text-base md:text-lg" />
//           <CiHeart className="text-base md:text-lg" />
//           <IoCartOutline className="text-base md:text-lg" />
//         </div>
//       </div>
//       <div className="relative w-full h-[350px] mt-[30px]">
//         {/* Background Image */}
//         <Image
//           src="/images/Group 43.png"
//           alt="insta"
//           layout="fill" // Fills the parent container
//           objectFit="cover" // Ensures the image covers the container
//           className="object-cover"
//         />
//         {/* Text Overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000]px-4">
//           <h1 className="text-[24px] md:text-[36px] font-bold">Contact</h1>
//           <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2 font-semibold">
//             Home - Contact
//           </p>

//         </div>
//       </div>
//       <div className="text-center md:pt-[40px]">
//         <h1 className="text-center text-[24px] md:text-[36px] font-semibold">Get In Touch With Us</h1>
//         <p className="opacity-[0.5] max-w-[600px] mx-auto text-[14px] pt-[10px]">
//           Find a bright ideal to suit your taste with our great selection of <br></br>suspension, floor, and table lights.
//         </p>
//       </div>
//       <div className="flex flex-col lg:flex-row justify-between items-start w-full px-4 lg:px-16 py-8">
//   {/* Left Column (Address Section) */}
//   <div className="w-full lg:w-[30%] flex flex-col space-y-8">
//     {/* Address */}
//     <div className="flex flex-col items-start">
//       <FaLocationDot className="text-xl text-gray-700 mb-2" />
//       <h1 className="text-lg font-bold text-gray-800 mb-2">Address</h1>
//       <p className="text-sm text-gray-600">
//         236 5th SE Avenue,
//         <br /> New York NY10000
//         <br /> United States
//       </p>
//     </div>

//     {/* Phone */}
//     <div className="flex flex-col items-start">
//       <FaPhoneAlt className="text-xl text-gray-700 mb-2" />
//       <h1 className="text-lg font-bold text-gray-800 mb-2">Phone</h1>
//       <p className="text-sm text-gray-600">
//         Mobile: 32343-54-54
//         <br /> Hotline: 32343-54-54
//       </p>
//     </div>

//     {/* Working Time */}
//     <div className="flex flex-col items-start">
//       <IoIosTime className="text-xl text-gray-700 mb-2" />
//       <h1 className="text-lg font-bold text-gray-800 mb-2">Working Time</h1>
//       <p className="text-sm text-gray-600">
//         Morning: 3 hours
//         <br /> Evening: 3 hours
//       </p>
//     </div>
//   </div>

//   {/* Right Column (Form Section) */}
//   <div className="w-full lg:w-[60%] flex flex-col space-y-4 mt-8 lg:mt-0">
//   <input
//     type="text"
//     placeholder="Your Name"
//     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
//   <input
//     type="email"
//     placeholder="Email Address"
//     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
//   <input
//     type="text"
//     placeholder="Subject"
//     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
//   <textarea
//     placeholder="Hi, I would like to ask you..."
//     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//     rows={5}
//   ></textarea>
//   <button className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
//     Submit
//   </button>
// </div>

//       {/* <div className='flex'>
//       <div>
//         <div>
//         <FaLocationDot />
//             <h1>Address</h1>
//             <p>236 5th SE Avenue,<br></br> New York NY10000<br></br> United States</p>
//         </div>
//         <div>
//         <FaPhoneAlt />
//             <h1>Phone</h1>
//             <p>Mobile:32343-54-54<br></br>HotNume:32343-54-54</p>
//         </div>
//         <div>
//         <IoIosTime />
//         <h1>Working Time</h1>
//         <p>Morning:3 hours<br></br>Evening:3 hours</p>
//         </div>
//       </div>
//       <div>
//         <input type='text' placeholder='Your name' />
//         <input type='email' placeholder='Email Address' />
//         <input type='text' placeholder='Subject' />
//         <textarea placeholder='Hi I would Like to ask you' >Message</textarea>
//         <button>Submit</button>
//       </div>
//     </div> */}
//     </div>
//     </>
//   )
// }

// export default ContactPage;
