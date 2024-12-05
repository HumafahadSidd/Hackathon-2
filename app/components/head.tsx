import Link from "next/link";
import React from "react";
import Image from "next/image";


export default function Head() {
  return (
  
    <div>          {/* major div */}
    <div className="flex  mt-[80px] ml-[135px] justify-between gap-40  w-full h-20">
      {/* first div */}
      <div className="left flex gap-[130px] ">
        <div className="font-bold text-6xl h-20">Exclusive</div>
        {/* second div */}
        <div className="">
          <ul className="flex gap-32 justify-between text-3xl text-center font-semibold p-2 ml-30 mt-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
            <li>
              <Link href="/SignUp">SignUp</Link>
            </li>
          </ul>
        </div>
        {/* third div */}
        <div className="right">
          <div>
            <Image
              src={"/Frame 552.png"}
              alt={"input"}
              height={400}
              width={800}
              />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
