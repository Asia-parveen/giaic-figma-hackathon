import React from 'react';

const ShopSlider = () => {
  return (
    <div className="flex flex-wrap justify-evenly bg-[#FAFAFA] w-full lg:w-[1440px] py-[90px] lg:py-[120px] lg:h-[200px] mt-[40px] lg:mb-[40px] px-4 sm:px-0">
      {/* Column 1 */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-auto gap-2 text-center sm:text-left">
        <h2 className="font-bold">Free Delivery</h2>
        <p className="font-semibold opacity-[0.6]">business dolor sit amet.</p>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-auto gap-2 text-center sm:text-left">
        <h2 className="font-bold">90 Days Returns</h2>
        <p className="font-semibold opacity-[0.6]">Filter tables dolor sit amet.</p>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-auto gap-2 text-center sm:text-left">
        <h2 className="font-bold">Secure Payment</h2>
        <p className="font-semibold opacity-[0.6]">lexury dolor sit amet.</p>
      </div>
    </div>
  );
};

export default ShopSlider;






// import React from 'react'



// const ShopSlider = () => {
//   return (
//     <div> <div className="flex flex-wrap sm:flex-nowrap bg-[#FAFAFA] w-full lg:w-[1440px] h-auto lg:h-[100px] mt-[40px] justify-between sm:justify-around items-center px-4 sm:px-0">
//     {/* Filter Section */}
//     <div className="flex flex-wrap gap-4 sm:gap-10 font-semibold text-start items-center w-full sm:w-auto justify-center sm:justify-start">
//       <h2>Free Delivery</h2>
//       <p>Filter Lorem ipsum dolor sit amet.</p>
      
//       <p className="text-center sm:text-left">| Showing 1–16 of 32 results</p>
//     </div>

//     {/* Show and Sort Section */}
//     <div className="flex flex-wrap gap-4 font-semibold items-center justify-center sm:justify-end w-full sm:w-auto mt-4 sm:mt-0">
     
//       <h2>90 Days Returns</h2>
//       <p>Filter Lorem ipsum dolor sit amet.</p>
//       </div>
     
//       <div >
//       <h2>Secure Payment</h2>
//       <p>Lorem ipsum dolor sit amet.</p>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default ShopSlider