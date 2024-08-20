import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AddBusinessForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
    address: '',
    website: '',
    category: '',
    products: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBusiness = {
        ...formData,
        products: formData.products.split(',').map(product => product.trim()), // Convert comma-separated string to array
      };
      const response = await fetch('http://localhost:4000/api/become-a-creator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBusiness),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data);
      onClose();
    } catch (error) {
      console.error('Error adding business', error);
    }
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
          <h2 className="text-white text-3xl font-bold mb-6">Add Your Business</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-lg mb-2" htmlFor="name">Business Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Your Business Name"
                required
              />
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
            <div>
              <label className="block text-white text-lg mb-2" htmlFor="contactEmail">Contact Email</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-white text-lg mb-2" htmlFor="contactPhone">Contact Phone</label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Your Phone Number"
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
              <label className="block text-white text-lg mb-2" htmlFor="website">Website</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Your Website URL"
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
              <label className="block text-white text-lg mb-2" htmlFor="products">Products (comma separated)</label>
              <input
                type="text"
                id="products"
                name="products"
                value={formData.products}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="List your products..."
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

export default AddBusinessForm;
