import React from 'react';

const BusinessItem = ({ name, address, category }) => {
    return (
        <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-700">{address}</p>
            <p className="text-gray-500">{category}</p>
        </div>
    );
};

export default BusinessItem;
