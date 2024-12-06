import Link from "next/link";
import React from "react";
// import CartItems from "../Cart/page";

import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

export default function Head() {
  return (
  
    <div className="max-w-screen max-auto"> 
             {/* major div */}
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
          <div className="flex gap-20">
            <div className=" border flex px-7 py-4 m-2">
            <input type="text" placeholder="Search Items Here"  className=" px-7 py-4"/><CiSearch  size={50}/>
            </div >
            <Link href={"/Cart"}><CiShoppingCart size={50}/></Link>
            <Link href={"/WishList"}><FaRegHeart size={50}/></Link>
            

          </div>
          </div>
          </div>
          
        </div>
      </div>
    
    
  );
}
