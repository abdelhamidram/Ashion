import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon, SearchIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-7">
            <div >
              <Link to="/" ClassName="text-green-500 font-semibold ">
                <span className="font-semibold text-green-500 text-xl flex items-center py-4 px-2 ">
                  Ashion
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link exact to="/" ClassName="text-green-500 font-semibold">
                <span className="py-2 px-2 text-gray-600 hover:text-green-500 transition duration-300">
                  Product
                </span>
              </Link>
              <Link to="/login" ClassName="text-green-500 font-semibold">
                <span id="Login" className="py-2 px-2 text-gray-600 hover:text-green-500 transition duration-300">
                  Login
                </span>
              </Link>
              <Link to="/contact" ClassName="text-green-500 font-semibold">
                <span className="py-2 px-2 text-gray-600 hover:text-green-500 transition duration-300">
                  Contact
                </span>
              </Link>              
              <Link to="/user" exact={true} ClassName="text-green-500 font-semibold flex items-center justify-center">
                <span className="py-2 px-2 text-gray-600 hover:text-green-500 transition duration-300 flex items-center justify-center">
                  user
                </span>
              </Link>               
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/search">
              <span className="py-2 px-2 text-gray-600 hover:text-green-500 transition duration-300">
                <SearchIcon className="w-6 h-6 hover:scale-150" />
              </span>
            </Link>
            <Link to="/cart">
              <span className="py-2 px-2 text-gray-600 hover:text-green-500 transition duration-300">
                <ShoppingCartIcon className="w-6 h-6 hover:scale-150" />
              </span>
            </Link>

          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XIcon className="w-6 h-6 text-gray-800" />
              ) : (
                <MenuIcon className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu md:hidden bg-gray-100 shadow-lg">
          <ul className="py-4">
            <li className="active">
              <Link to="/" activeClassName="text-green-500 font-semibold">
                <span className="block text-lg px-4 py-2 text-gray-800">Product</span>
              </Link>
            </li>
            <li className="active">
              <Link to="/login" ClassName="text-green-500 font-semibold">
                <span className="block text-lg px-4 py-2 text-gray-800">Login</span>
              </Link>
            </li>
            <li className="active">
              <Link to="/contact" ClassName="text-green-500 font-semibold">
                <span className="block text-lg px-4 py-2 text-gray-800">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
