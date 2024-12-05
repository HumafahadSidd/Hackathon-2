import React from "react";

export default function Tophead() {
  return (
    <div>
      <div className="header ">
        <ul className="bg-black text-white text-2xl font-semibold justify-center flex p-2 pt-5 gap-20 h-20">
          <li>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </li>
          <li>ShopNow</li>
          <li>
            <select className="bg-black text-white">
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="Chinease">Chinease</option>
            </select>
          </li>
        </ul>
        <div className="p-1 bg-pink-600"></div>
      </div>
    </div>
  );
}
