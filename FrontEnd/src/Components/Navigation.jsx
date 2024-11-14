import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Set the current page based on the URL path
    setCurrentPage(window.location.pathname);
  }, [window.location.pathname]); // Runs when the route changes

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => navigate('/landing')}
          className="text-2xl font-bold text-gray-800 hover:text-gray-600"
        >
          Mannings
        </button>
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <button
            onClick={() => navigate('/landing')}
            className="text-gray-700 hover:text-gray-900"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/footer')}
            className="text-gray-700 hover:text-gray-900"
          >
            Contact
          </button>
          {/* Conditionally render the button based on current page */}
          {currentPage !== '/list' && (
            <button
              onClick={() => navigate(currentPage === '/addForm' ? '/list' : '/addForm')}
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700"
            >
              {currentPage === '/addForm' ? 'List' : 'Get Started'}
            </button>
          )}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="space-y-2 px-6 py-4">
            <li>
              <button
                onClick={() => navigate('/landing')}
                className="block text-gray-700 hover:text-gray-900"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/footer')}
                className="block text-gray-700 hover:text-gray-900"
              >
                Contact
              </button>
            </li>
            {/* Conditionally render the button based on current page */}
            {currentPage !== '/list' && (
              <li>
                <button
                  onClick={() => navigate(currentPage === '/addForm' ? '/list' : '/addForm')}
                  className="w-full bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700"
                >
                  {currentPage === '/addForm' ? 'List' : 'Get Started'}
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
