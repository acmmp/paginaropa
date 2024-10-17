import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';

interface HeaderProps {
  toggleCart: () => void;
  cartItemsCount: number;
}

const Header: React.FC<HeaderProps> = ({ toggleCart, cartItemsCount }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-bold text-blue-600">FashionHub</h1>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Products</Link>
            <Link to="/men" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Men</Link>
            <Link to="/women" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Women</Link>
            <Link to="/accessories" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Accessories</Link>
            <Link to="/sale" className="text-red-600 hover:text-red-700 transition-colors duration-300 font-semibold">Sale</Link>
          </nav>
          <div className="flex items-center">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button className="md:hidden ml-4">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;