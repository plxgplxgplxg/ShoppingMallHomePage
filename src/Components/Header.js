import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faUser, faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">PLXG</a>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="menuXuong relative">
              <button className="text-gray-600 hover:text-black font-medium focus:outline-none">
                Nữ <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
              </button>
              <div className="danhSach absolute hidden bg-white shadow-lg rounded mt-2 py-2 w-48">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Áo nữ</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đầm/Váy</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Quần nữ</a>
              </div>
            </div>

            <div className="menuXuong relative">
              <button className="text-gray-600 hover:text-black font-medium focus:outline-none">
                Nam <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
              </button>
              <div className="danhSach absolute hidden bg-white shadow-lg rounded mt-2 py-2 w-48">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Áo nam</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Quần nam</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đồ vest</a>
              </div>
            </div>

            <a href="#" className="text-gray-600 hover:text-black font-medium">Bộ sưu tập</a>
            <a href="#" className="text-gray-600 hover:text-black font-medium">Giới thiệu</a>
            <a href="#" className="text-gray-600 hover:text-black font-medium">Liên hệ</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-500 hover:text-black">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="text-gray-500 hover:text-black">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button className="text-gray-500 hover:text-black relative">
              <FontAwesomeIcon icon={faShoppingBag} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-500 hover:text-black focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden py-4 ${menuOpen ? '' : 'hidden'}`}>
          <a href="#" className="block py-2 text-gray-600 hover:text-black">Nữ</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-black">Nam</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-black">Bộ sưu tập</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-black">Giới thiệu</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-black">Liên hệ</a>
        </div>
      </div>
    </header>
  );
}

export default Header;