import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Footprints, Search, ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import CartDrawer from './CartDrawer';
import SearchResults from './SearchResults';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Mock search results
  const searchResults = searchQuery
    ? [
        {
          id: '1',
          name: 'Premium Sport Shoe',
          price: 12999,
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
          size: '42',
          inStock: true
        }
      ]
    : [];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(true);
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Footprints className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">DD Footwear</span>
            </Link>

            <div className="flex-1 max-w-xl mx-8 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => setShowSearchResults(true)}
                  onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              {showSearchResults && searchQuery && (
                <SearchResults
                  results={searchResults}
                  onClose={() => setShowSearchResults(false)}
                />
              )}
            </div>

            <div className="flex items-center space-x-6">
              <Link to="/order-status" className="text-gray-600 hover:text-blue-600">
                Track Order
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-blue-600">
                Products
              </Link>
              
              <button
                onClick={() => setShowCart(true)}
                className="p-2 hover:bg-gray-100 rounded-full relative"
              >
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              <div className="relative">
                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <User className="h-6 w-6 text-gray-600" />
                    </button>

                    {showUserMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                        <div className="px-4 py-2 border-b">
                          <p className="text-sm font-medium">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                        <button
                          onClick={() => {
                            logout();
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <User className="h-6 w-6 text-gray-600" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />
      
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
      
      <CartDrawer
        isOpen={showCart}
        onClose={() => setShowCart(false)}
      />
    </>
  );
};

export default Navbar;