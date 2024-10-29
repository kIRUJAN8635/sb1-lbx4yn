import React, { useState } from 'react';
import { Filter, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Products = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.size
    });
  };

  // Mock products data
  const products = [
    {
      id: '1',
      name: 'Premium Sport Shoe',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      size: '42',
      inStock: true
    },
    // Add more mock products as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Our Products</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Filters */}
        <div className={`col-span-3 space-y-6 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {['Sports', 'Casual', 'Formal', 'Sandals'].map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Price Range</h3>
            <input
              type="range"
              min="0"
              max="100"
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span>Rs. 0</span>
              <span>Rs. 50,000</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Availability</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span>In Stock</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span>Pre-order</span>
              </label>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`${showFilters ? 'col-span-9' : 'col-span-12'} grid md:grid-cols-3 gap-6`}>
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">Size: {product.size}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {product.inStock ? 'In Stock' : 'Pre-order'}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-lg">Rs. {product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;