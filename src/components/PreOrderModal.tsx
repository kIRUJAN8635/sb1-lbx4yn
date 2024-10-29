import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    size: string;
  };
}

const PreOrderModal: React.FC<PreOrderModalProps> = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    size: product.size,
    quantity: 1,
    email: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to place pre-order
    await new Promise(resolve => setTimeout(resolve, 1000));
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Pre-order Product</h2>

        <div className="flex items-center space-x-4 mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="h-20 w-20 object-cover rounded"
          />
          <div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-gray-500">Rs. {product.price}</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
            <p className="text-sm text-blue-700">
              This item is currently out of stock. Place a pre-order to secure your purchase when stock becomes available.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Size
            </label>
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {[38, 39, 40, 41, 42, 43, 44].map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Place Pre-order
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          You'll be notified when the item becomes available
        </p>
      </div>
    </div>
  );
};

export default PreOrderModal;