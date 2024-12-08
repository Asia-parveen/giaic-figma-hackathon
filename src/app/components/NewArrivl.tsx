import React from 'react';
import Image from 'next/image';

const NewArrivl = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:px-[20px] justify-center items-center gap-4 bg-[#FFF9E5]">
        {/* Image Section */}
        <div className="w-full md:w-[65%]">
          <Image
            src="/images/sofaset.png"
            alt="sofa"
            width={700}
            height={600}
            className="object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[25%] text-center md:text-left">
          <h2 className="text-[20px] md:text-[24px] font-semibold text-[#000000]">New Arrivals</h2>
          <h1 className="text-[26px] md:text-[33px] font-bold text-[#000000]">Asgaard sofa</h1>
          <button className="px-[45px] py-[12px] border-2 border-black mt-[15px]  md:ml-[10px] mb-[30px]">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default NewArrivl;



// import React from 'react'
// import Image from 'next/image'

// const NewArrivl = () => {
//   return (
//    <>
//    <div className='flex md md:px-[20px] justify-center items-center'>
//     <div className='md: w-[65%]'>
//     <Image
//               src="/images/sofaset.png"
//               alt="sofa"
//               width={700}
//               height={600}
//               className="object-cover"
//             />
//     </div>
//     <div className='md: w-[25%]'>
//         <h2 className='md:text-[24px] font-semibold text-[#000000]'>New Arrivals</h2>
//         <h1 className='md:text-[33px] font-bold text-[#000000]'>Asgaard sofa</h1>
//         <button className='px-[45px] py-[15px] border-2 mt-[10px] ml-[10px]'>Order Now</button>
//     </div>
//     </div>
//    </>
//   )
// }

// export default NewArrivl
