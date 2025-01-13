
'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'
interface Product {
  name: string;
  discount: number;
  salePrice: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
}

const FlashSales: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const sanityData = await client.fetch(
          `*[_type == "product" && "featured" in tags]{
            name,
            "discount": discountPercentage,
            "salePrice": price - (price * discountPercentage / 100),
            "originalPrice": price,
            "rating": rating,
            "reviews": ratingCount,
            "image": image.asset->url
          }`
        );

        setProducts(sanityData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Today&apos;s Flash Sales</h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl">Time left: 3d 23h 19m 56s</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">View All Products</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.name} className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <div className="bg-cover">
              <Image src={product.image} alt={product.name} height={300} width={300} />
            </div>
            <div className="text-red-500 font-bold">{`-${product.discount}%`}</div>
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-500">{`$${product.salePrice.toFixed(2)} (was $${product.originalPrice.toFixed(2)})`}</p>
            <div className="flex items-center">
              <span className="text-yellow-500">⭐</span>
              <span>{`${product.rating} (${product.reviews} reviews)`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
