import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface SearchResult {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  inStock: boolean;
}

interface SearchResultsProps {
  results: SearchResult[];
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onClose }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: SearchResult) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.size
    });
    onClose();
  };

  return (
    <div className="absolute top-full left-0 right-0 bg-white mt-2 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
      {results.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          No products found
        </div>
      ) : (
        <div className="p-2">
          {results.map((product) => (
            <div
              key={product.id}
              className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 object-cover rounded"
              />
              <div className="flex-1">
                <Link
                  to={`/products/${product.id}`}
                  onClick={onClose}
                  className="font-medium hover:text-blue-600"
                >
                  {product.name}
                </Link>
                <p className="text-sm text-gray-500">Size: {product.size}</p>
                <p className="text-sm font-medium">Rs. {product.price}</p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Add</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;