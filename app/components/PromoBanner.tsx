import React from 'react';
// import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from 'next/image';

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-black p-4 flex justify-between rounded shadow items-center">
      <div className="flex flex-col items-start">
        <h2 className="text-2xl font-bold">iPhone 14 Series</h2>
        <p className="text-xl text-white pl-8">Up to 10% off Voucher</p>
        <button className="mt-2 ml-8 bg-blue-500 text-white py-2 px-4 rounded  ">Shop Now</button>
      </div>
      <div>
        <Image
          src="/1.png"
          alt="iPhone 14"
          width={800}
          height={300}
          
          className="bg-cover"
        />
      </div>
    </div>
  );
};
export default PromoBanner

