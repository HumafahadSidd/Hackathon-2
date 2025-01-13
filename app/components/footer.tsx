import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="text-base lg:text-xl w-full py-10 font-semibold bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-6 px-5">
        
        <div className="md:w-1/5">
          <h1 className="text-2xl">Exclusive</h1>
          <h2 className="text-xl">Subscribe</h2>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="Enter your email" 
              className="bg-black text-white p-2 border border-gray-400 rounded-l-md w-full md:w-auto" 
            />
            <IoIosArrowDroprightCircle 
              color="white" 
              size={40} 
              className="bg-blue-500 p-2 rounded-r-md"
            />
          </div>
        </div>
        
        <div className="md:w-1/5">
          <h1 className="text-2xl">Support</h1>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        
        <div className="md:w-1/5">
          <h1 className="text-2xl">Account</h1>
          <p>My Account</p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        
        <div className="md:w-1/5">
          <h1 className="text-2xl">Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        
        <div className="md:w-1/5">
          <h1 className="text-2xl">Download</h1>
          <p>Save $3 with App New User Only</p>
          <div className="my-4">
            <Image 
              src="/Frame 719.png" 
              alt="Download App" 
              height={200} 
              width={200} 
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
