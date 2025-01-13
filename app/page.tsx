import React from 'react'
import PromoBanner from './components/PromoBanner';
import Sidebar from './components/Sidebar';
import CategoryNav from './components/CategoryNav';

import FlashSales from './components/FlashSale'

const Home: React.FC = () => {

  return (
    <div className="">
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      
      <div className="flex-1 p-4">
        <PromoBanner />
      </div>
      </div>
      <div>
        <FlashSales />
      </div>
      <div className='mt-5 pl-16  justify-center'>
        <h2 className='font-semibold text-2xl  mb-4 '>Categories</h2>
        <CategoryNav />
      </div>
    
    </div>
  );
};

export default Home;