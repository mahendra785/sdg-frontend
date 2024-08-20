import React, { useState } from 'react';
import axios from 'axios';

const AddBusinessForm = ({ onBusinessAdded }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newBusiness = { name, address, category };
            const response = await axios.post('/', newBusiness);
            onBusinessAdded(response.data);
            setName('');
            setAddress('');
            setCategory('');
        } catch (error) {
            console.error('Error adding business', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
           <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Business
            </button>
        </form>
    );
};

export default AddBusinessForm;
