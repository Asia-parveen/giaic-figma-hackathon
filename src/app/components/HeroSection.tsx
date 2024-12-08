import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <>
      {/* Navbar Section */}
      <div className='flex flex-col md:flex-row justify-between items-center bg-[#FBEBB5] w-full h-auto md:h-[40px] pt-4 md:pt-[60px] px-4'>
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

      {/* Hero Section */}
      <div className='flex flex-col lg:flex-row bg-[#FBEBB5] h-auto lg:h-[100vh] justify-center items-center px-4'>
        {/* Text Section */}
        <div className='text-center lg:text-left mt-8 lg:mt-0'>
          <h1 className='text-[24px] md:text-[36px] lg:text-[64px] font-semibold text-[#000000]'>
            Rocket single<br /> seater
          </h1>
          <Link href="#">
            <p className='text-[14px] md:text-[16px] font-semibold text-[#000000] inline-block relative mt-2'>
              Shop Now
              <span className="block w-full h-[2px] bg-black mt-1"></span>
            </p>
          </Link>
        </div>

        {/* Image Section */}
        <div className='mt-6 lg:mt-0'>
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



// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FaRegUser } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";

// const HeroSection = () => {
//   return (

//     <>
//       <div className='flex flex-col md:flex-row justify-between items-center bg-[#FBEBB5] w-full h-auto md:h-[40px] pt-[20px] md:pt-[60px] px-4'>
//         {/* Center section with links */}
//         <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-center md:ml-[35%]'>
//           <Link href="#"><li className='text-[16px] font-semibold'>Home</li></Link>
//           <Link href="#"><li className='text-[16px] font-semibold'>Shop</li></Link>
//           <Link href="#"><li className='text-[16px] font-semibold'>About</li></Link>
//           <Link href="#"><li className='text-[16px] font-semibold'>Contact</li></Link>
//         </ul>

//         {/* Right section with icons */}
//         <div className='flex justify-center space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[16px] font-bold'>
//           <FaRegUser className="text-lg" />
//           <CiSearch className="text-lg" />
//           <CiHeart className="text-lg" />
//           <IoCartOutline className="text-lg" />
//         </div>
//       </div>
   
    
//       <div className='flex flex-col lg:flex-row bg-[#FBEBB5] h-[100vh] justify-center items-center'>
//         {/* Text Section */}
//         <div className='text-center lg:text-left md:pt-[60%] lg:pt-0'>
//           <h1 className='text-[32px] md:text-[48px] lg:text-[64px] font-semibold text-[#000000]'>
//             Rocket single<br /> seater
//           </h1>
//           <Link href="#">
//             <p className='text-[16px] font-semibold text-[#000000] inline-block relative'>
//               Shop Now
//               <span className="block w-full h-[2px] bg-black mt-1"></span>
//             </p>
//           </Link>
//         </div>

//         {/* Image Section */}
//         <div className='pt-6 lg:pt-0'>
//           <Image src="/images/seater1.png" alt="Rocket Seater" width={600} height={400} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;



// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <>
 
//     <div className=' flex  bg-[#FBEBB5] h-[100vh] justify-center  '>
//     <div className=' ' >
//         <h1 className='md:text-[64px] md:pt-[60%] font-semibold text-[#000000]'>Rocket single<br></br> seater</h1>
//       <Link href="#"><p className='text-[16px] font-semibold text-[#000000] '>Shop Now</p></Link>
//     </div>
//     <div className='pt-0'>
//         <Image src="/images/seater1.png" alt="" width={600} height={400} />
//     </div>
//     </div>


//     </>
//   )
// }

// export default HeroSection
