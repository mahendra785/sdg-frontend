import React, { useEffect, useState } from 'react';
import BusinessList from './components/BusinessList';
import AddBusinessForm from './components/AddBusinessForm';
import axios from 'axios';

const App = () => {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        const fetchBusinesses = async () => {
            try {
                const response = await axios.get('/api/businesses');
                setBusinesses(response.data);
            } catch (error) {
                console.error('Error fetching businesses', error);
            }
        };

        fetchBusinesses();
    }, []);

    const handleBusinessAdded = (newBusiness) => {
        setBusinesses((prevBusinesses) => [...prevBusinesses, newBusiness]);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Eco-Friendly Businesses</h1>
            <AddBusinessForm onBusinessAdded={handleBusinessAdded} />
            <BusinessList businesses={businesses} />
        </div>
    );
};

export default App;
