import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BusinessList = ({ businesses }) => {
    return (
        <div className="container">
            {businesses.map((business) => (
                <div key={business._id} className="business-item">
                    <h2>{business.name}</h2>
                    <p>{business.address}</p>
                    <p>{business.category}</p>
                </div>
            ))}
        </div>
    );
};

export default BusinessList;
