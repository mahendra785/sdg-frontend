import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BecomeSellerForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    address: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-8">
          <h2 className="text-white text-3xl font-bold mb-6">Become a Seller</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-lg mb-2" htmlFor="businessName">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Your Business Name"
                required
              />
            </div>
            <div>
              <label className="block text-white text-lg mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-white text-lg mb-2" htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Your Address"
                required
              />
            </div>
            <div>
              <label className="block text-white text-lg mb-2" htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              >
                <option value="">Select a category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
            <div>
              <label className="block text-white text-lg mb-2" htmlFor="description">Description (max 150 words)</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Describe your business..."
                maxLength={150}
                rows={4}
                required
              />
            </div>
            <div className="flex justify-end space-x-4">
              <motion.button
                type="button"
                onClick={onClose}
                className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
              <motion.button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default BecomeSellerForm;