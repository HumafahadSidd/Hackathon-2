import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex justify-between mt-10 p-16 ">
      <div className="sidebar w-16 h-[344px] text-2xl">
        <table className="border w-[600px] border-blue-300 text-gray-700 mt-4">
          <tr>
            <td className="pt-2 pb-2">
              Women fashion
              <select name="" id="">
                <option value="">more</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="pt-4 pb-4">
              Women fashion
              <select name="" id="">
                <option value="">more</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="pt-2 pb-2">Women fashion</td>
          </tr>
          <tr>
            <td className="pt-2 pb-2">Mens fashion</td>
          </tr>
          <tr>
            <td className="pt-2 pb-2">Electronics</td>
          </tr>
          <tr>
            <td className="pt-2 pb-2">Life Style</td>
          </tr>
          <tr>
            <td className="pt-2 pb-2">Home And Living</td>
          </tr>
          <tr>
            <td className="pt-2 pb-2">Medicines</td>
          </tr>
          <tr>
            <td className="pt-2 pb-2">Sports & OutDoor</td>
          </tr>
          <tr>
            <td className="pt-2 pb-2">Fisheries & Pets</td>
          </tr>
          <tr>
            <td className="pt-2 pb-2">Health & Beauty</td>
          </tr>
        </table>
      </div>

      <div className="flex ">
        <div className="bg-black text-center text-white flex w-[1800px] h-[600px] pt-8 ">
          <div className="flex-col w-[1400px]">
            {" "}
            <div className="mt-[30px] ml-20">
              <Image
                src={"/Frame 563.png"}
                alt={"imageapple"}
                height={200}
                width={200}
              />
            </div>
            <h1 className="font-bold text-6xl text-center mt-20">
              Up to 10% <br />
              OFF Voucher
            </h1>
            <div className="flex ">
              <h2 className="mt-[80px] ml-[80px] text-2xl underline flex text-pretty">
                Shop Now
              </h2>

              <div className="mt-16 ml-16">
                <Image
                  src={"/Vector (1).png"}
                  alt="image2"
                  height={50}
                  width={50}
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="image mt-2 w-[200px]px-32 py-32">
              <Image
                src={"/image1.png"}
                alt={"mobileimage"}
                height={600}
                width={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
