import React from 'react';

const NavBar: React.FC = () => {
  return (
    <div className="bg-black text-white flex justify-between items-center p-5">
      <div className="text-lg ">
        <h2 className='pl-60 '>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <span className="text-yellow-500 pl-4"> ShopNow</span>
        </h2>
      </div>
      <div className="flex items-center">
        <label htmlFor="language" className="mr-2 hidden">Language:</label>
        <select id="language" name="language" className="p-2 bg-white text-black">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          {/* Add more language options as needed */}
        </select>
      </div>
    </div>
  );
};

export default NavBar;
