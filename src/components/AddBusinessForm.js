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
            const response = await axios.post('/api/become-a-creator', newBusiness);
            onBusinessAdded(response.data);
            setName('');
            setAddress('');
            setCategory('');
        } catch (error) {
            console.error('Error adding business', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Category</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="submit-button">
                Add Business
            </button>
        </form>
    );
};

export default AddBusinessForm;
