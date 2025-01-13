const Sidebar: React.FC = () => {
    const categories = [
      "Women's Fashion",
      "Men's Fashion",
      "Electronics",
      "Home & Lifestyle",
      "Medicine",
      "Sports & Outdoor",
      "Baby's & Toys",
      "Groceries & Pets",
      "Health & Beauty",
    ];
  
    return (
      <div className="bg-white p-4 w-full lg:w-1/4">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category} className="text-gray-800 hover:text-gray-600 cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  };
export default Sidebar  