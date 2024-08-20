import React, { useState } from 'react';

const AddBusinessForm = ({ onBusinessAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');
    const [category, setCategory] = useState('');
    const [products, setProducts] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newBusiness = {
                name,
                description,
                contactEmail,
                contactPhone,
                address,
                website,
                category,
                products: products.split(',').map(product => product.trim()) // Convert comma-separated string to array
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
            onBusinessAdded(data);
            setName('');
            setDescription('');
            setContactEmail('');
            setContactPhone('');
            setAddress('');
            setWebsite('');
            setCategory('');
            setProducts('');
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
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Contact Phone</label>
                <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
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
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Website</label>
                <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Products (comma separated)</label>
                <input
                    type="text"
                    value={products}
                    onChange={(e) => setProducts(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Business
            </button>
        </form>
    );
};

export default AddBusinessForm;
