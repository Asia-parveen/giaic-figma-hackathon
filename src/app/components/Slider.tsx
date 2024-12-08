import React from 'react';
import { PiCirclesFourDuotone } from "react-icons/pi";
import { BsWindow } from "react-icons/bs";

const Slider = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap bg-[#FAFAFA] w-full lg:w-[1440px] h-auto lg:h-[100px] mt-[40px] justify-between sm:justify-around items-center px-4 sm:px-0">
      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 sm:gap-10 font-semibold text-start items-center w-full sm:w-auto justify-center sm:justify-start">
        <p>Filter</p>
        <PiCirclesFourDuotone />
        <BsWindow />
        <p className="text-center sm:text-left">| Showing 1–16 of 32 results</p>
      </div>

      {/* Show and Sort Section */}
      <div className="flex flex-wrap gap-4 font-semibold items-center justify-center sm:justify-end w-full sm:w-auto mt-4 sm:mt-0">
        <p>Show</p>
        <div className="w-[40px] h-[40px] bg-white text-black flex justify-center items-center">
          16
        </div>
        <p>Sort by</p>
        <div className="w-[150px] h-[50px] bg-white flex justify-center items-center">
          default
        </div>
      </div>
    </div>
  );
};

export default Slider;



// import React from 'react'
// import { PiCirclesFourDuotone } from "react-icons/pi";
// import { BsWindow } from "react-icons/bs";

// const Slider = () => {
//   return (
//     <div className='flex bg-[#FAFAFA] w-[1440px] h-[100px] mt-[40px] justify-around items-center'>
//         <div className='flex gap-10 font-semibold text-start items-center'>
//             <p>Filter</p>
//             <PiCirclesFourDuotone />
//             <BsWindow />
//             <p> | Showing 1–16 of 32 results</p>

//         </div>
//         <div className='flex gap-4 font-semibold'>
//             <p>Show</p>
//             <div className='w-[40px] h-[40px] bg-white text-black text-center items-center  px-[40px] py-[10px]'>16

//             </div>
           
//             <p>Sort by</p>
//             <div className='w-[150px] h-[50px] bg-white px-[40px] py-[10px] '>default

           
//         </div>
//         </div>
//         </div>
      
    
//   )
// }

// export default Slider;
