import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Exclusive</div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
          <a href="/contact" className="text-gray-800 hover:text-gray-600">Contact</a>
          <a href="/About" className="text-gray-800 hover:text-gray-600">About</a>
          <a href="/SignUp" className="text-gray-800 hover:text-gray-600">Sign Up</a>
        </div>
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="What are you looking for?" 
            className="p-2 border border-gray-300 rounded-md"
          />
          <Link href={"#"}><button className="p-2">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button></Link>
          <Link href={"/WishList"}><button className="p-2">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8a7 7 0 0114 0v4a7 7 0 01-14 0V8zM12 14v-4"></path>
            </svg>
          </button> </Link>

           
          <Link href={"/Cart"}><button className="p-2">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1 12H4L3 3zM10 3v18M14 3v18"></path>
            </svg>
          </button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
