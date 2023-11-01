import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

function Bar({ Name, url }) {
  return (
  <Link to={url} ClassName="text-green-500 font-semibold flex items-center justify-center">
    <span className="py-2 px-2 text-gray-600 hover:text-green-500 transition duration-300 flex items-center justify-center">
      {Name}
    </span>
  </Link> 
  );
};

function Mobilebar({ NameMob, urlMob }) {
  return (
    <li className="active">
    <Link to={urlMob} ClassName="text-green-500 font-semibold">
      <span className="block text-lg px-4 py-2 text-gray-800">{NameMob}</span>
    </Link>
  </li>
  );
};


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
              <Bar url="/" Name="Product" />

              <Bar url="/login" Name="Login" />

              <Bar url="/contact" Name="Contact" />

              <Bar url="/addproduct" Name="AddProduct" />

              <Bar url="/user" Name="user" />
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

            <Mobilebar NameMob="Product" urlMob="/"/>
            <Mobilebar NameMob="Login" urlMob="/login"/>
            <Mobilebar NameMob="Contact" urlMob="/contact"/>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
