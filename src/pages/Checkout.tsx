import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, Shield } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    shippingAddress: user?.address || '',
    paymentMethod: 'card',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    clearCart();
    navigate('/order-status');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Size: {item.size} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">Rs. {item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>Rs. {total}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Rs. 500</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Rs. {total + 500}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <div className="flex items-center space-x-3 text-green-600">
              <Shield className="h-5 w-5" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-3 text-blue-600">
              <Truck className="h-5 w-5" />
              <span>Free Returns</span>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shipping Address
              </label>
              <textarea
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="card">Credit Card</option>
                <option value="cash">Cash on Delivery</option>
              </select>
            </div>

            {formData.paymentMethod === 'card' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                    <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      name="cardCvc"
                      value={formData.cardCvc}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;