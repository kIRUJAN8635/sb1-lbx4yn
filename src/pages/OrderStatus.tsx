import React, { useState } from 'react';
import { Search, Package } from 'lucide-react';

const OrderStatus = () => {
  const [orderId, setOrderId] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Track Your Order</h1>
        <p className="text-gray-600">Enter your order ID to check the current status</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex space-x-4">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID"
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={() => setShowStatus(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <Search className="h-5 w-5" />
            <span>Track</span>
          </button>
        </div>
      </div>

      {showStatus && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Package className="h-8 w-8 text-blue-600" />
            <div>
              <h2 className="text-xl font-semibold">Order #DD123456</h2>
              <p className="text-gray-600">Placed on March 15, 2024</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200" />
            <div className="space-y-8 relative">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white relative z-10">
                  ✓
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Order Confirmed</h3>
                  <p className="text-sm text-gray-600">March 15, 2024 - 10:30 AM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white relative z-10">
                  ✓
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Processing</h3>
                  <p className="text-sm text-gray-600">March 15, 2024 - 2:45 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white relative z-10">
                  •
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">In Transit</h3>
                  <p className="text-sm text-gray-600">Estimated delivery: March 18, 2024</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-400 relative z-10">
                  •
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-400">Delivered</h3>
                  <p className="text-sm text-gray-400">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderStatus;