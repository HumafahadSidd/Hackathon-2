'use client'
import React, { useState } from 'react';

const categories = [
  { name: 'Phones', icon: '📱' },
  { name: 'Computers', icon: '💻' },
  { name: 'SmartWatch', icon: '⌚' },
  { name: 'Camera', icon: '📷' },
  { name: 'HeadPhones', icon: '🎧' },
  { name: 'Gaming', icon: '🎮' },
];

const CategoryNav: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Camera');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex items-center space-x-4 overflow-x-auto">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`flex flex-col items-center cursor-pointer ${
            selectedCategory === category.name ? 'text-red-500' : 'text-gray-800'
          }`}
          onClick={() => handleCategoryClick(category.name)}
        >
          <div className="text-4xl p-8 pl-4 ">{category.icon}</div>
          <div className="text-lg">{category.name}</div>
        </div>
      ))}
      <div className="flex-shrink-0">
        <button className="ml-4 text-gray-800">&rarr;</button>
      </div>
    </div>
  );
};

export default CategoryNav;
