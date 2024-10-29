import React from 'react';
import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-bold max-w-2xl">
              Step into Comfort with DD Footwear's Premium Collection
            </h1>
            <p className="text-xl max-w-xl">
              Discover our extensive range of quality footwear, now available online and through our partner network.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <Star className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              Handcrafted with the finest materials for lasting comfort and style.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <Users className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Partner Network</h3>
            <p className="text-gray-600">
              Available through our trusted partners across Sri Lanka.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Stock</h3>
            <p className="text-gray-600">
              Check product availability and stock levels instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500`}
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Premium Sport Shoe</h3>
                <p className="text-gray-600 text-sm mb-2">Available in all sizes</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Rs. 12,999</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;