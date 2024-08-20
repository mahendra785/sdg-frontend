import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import ACMLogo from '../components/acmlogo';

const ListPage = () => {
  const [businesses, setBusinesses] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/businesses');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBusinesses(data);
      } catch (error) {
        console.error('Error fetching businesses', error);
      }
    };
    fetchBusinesses();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <main className="flex-grow flex">
        {/* Business Details */}
        <div className="w-2/5 p-6 bg-white shadow-lg">
          {selectedBusiness ? (
            <div className="bg-green-100 rounded-lg p-6 border-2 border-green-300">
              <h2 className="text-3xl font-bold mb-4 text-green-800">{selectedBusiness.name}</h2>
              <div className="space-y-3">
                <p className="text-lg"><span className="font-semibold text-green-700">Category:</span> {selectedBusiness.category}</p>
                <p className="text-lg"><span className="font-semibold text-green-700">Type:</span> {selectedBusiness.type}</p>
                <p className="text-lg"><span className="font-semibold text-green-700">Address:</span> {selectedBusiness.address}</p>
                <p className="text-lg"><span className="font-semibold text-green-700">Email:</span> {selectedBusiness.contactEmail}</p>
                <p className="text-lg"><span className="font-semibold text-green-700">Phone:</span> {selectedBusiness.contactPhone}</p>
                <p className="text-lg"><span className="font-semibold text-green-700">Description:</span> {selectedBusiness.description}</p>
                {selectedBusiness.website && (
                  <p className="text-lg mt-4">
                    <a href={selectedBusiness.website} className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300" target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl text-gray-500">Select a green business to see details</p>
            </div>
          )}
        </div>
        {/* Business List */}
        <div className="w-3/5 overflow-y-auto p-6 bg-green-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businesses.length > 0 ? (
              businesses.map((business) => (
                <div
                  key={business.id}
                  className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 cursor-pointer transform hover:scale-105 ${
                    selectedBusiness && selectedBusiness.id === business.id
                      ? 'border-4 border-green-500'
                      : 'border border-green-200'
                  }`}
                  onClick={() => setSelectedBusiness(business)}
                >
                  <h2 className="text-2xl font-bold mb-2 text-green-800">{business.name}</h2>
                  <p className="text-green-600 font-semibold mb-2">{business.type}</p>
                  <p className="text-gray-600">{business.category}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">{business.address.split(',')[0]}</span>
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-2 text-center text-xl text-gray-500">No green businesses found</p>
            )}
          </div>
        </div>
      </main>
      <footer className="bg-green-600 bg-opacity-75 py-10">
  <div className="flex justify-center items-center space-x-4">
    <div className="text-white text-lg font-semibold">
      Join us in our mission to create a sustainable future! 🌍
    </div>
    <div className="transform scale-75 overflow-none">
      <a href="https://www.acmvit.in/">
        <ACMLogo />
      </a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default ListPage;
