import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="flex">
      <div className="left w-full h-20 pt-3 justify-between bg-purple-200">
        <ul className="flex justify-between pt-3">
          <span className="text-3xl ml-4  font-bold shadow-sm ">Exclusive</span>
          <span className="justify-center mt-3  gap-10 mr-20 flex">
            {" "}
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>SignUp</li>
            <li className="">
              {" "}
              <input
                type="text"
                placeholder="Search here"
                className="border rounded px-3 py-3"
              />
            </li>
            <li>
              <span>
                <Image
                  src="/Cart1 with buy.png"
                  alt="image3"
                  height={50}
                  width={50}
                />
                <Link href="/Cart">Cart</Link>
              </span>
            </li>
          </span>
        </ul>
      </div>
    </div>
  );
}
