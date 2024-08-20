import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BecomeSellerForm from './becomeseller'; // Import the form component
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility

  return (
    <>
      <nav className="bg-emerald-500 p-4 shadow-md">
        <div className="container mx-auto h-[8vh] flex items-center justify-between">
          {/* Left side - Links */}
          <div className="flex space-x-8">
            <a href="/" className="text-xl text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-green-200 hover:scale-105">
              Home
            </a>
            <a href="/about" className="text-xl text-green-700 hover:text-green-900 px-3 py-2 z-10 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-green-200 hover:scale-105">
              About
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-700 hover:text-green-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop buttons (hidden on mobile) */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setIsFormOpen(true)} // Open form on click
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Become a Seller
            </button>
            <a href='/contactus'>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
              Contact Us
            </button>
            </a>
          </div>
        </div>

        {/* Mobile menu (visible when open) */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <a href="/" className="block text-2xl text-green-200 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-green-200">
            Home
          </a>
          <a href="/about" className="block text-2xl text-green-200 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-green-200">
            About
          </a>

          <button
            onClick={() => setIsFormOpen(true)} // Open form on click
            className="w-full bg-green-200 text-white px-4 py-2 rounded-full hover:bg-green-300 transition duration-300 ease-in-out transform hover:scale-105 mt-2"
          >
            Become a Seller
          </button>
          <button className="w-full bg-green-200 text-white px-4 py-2 rounded-full hover:bg-green-300 transition duration-300 ease-in-out transform hover:scale-105 mt-2">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Form Popup */}
      {isFormOpen && <BecomeSellerForm onClose={() => setIsFormOpen(false)} />} {/* Close form on button click */}
    </>
  );
};

export default Navbar;
