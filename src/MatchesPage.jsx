import { MOCK_MATCHES } from './utils/constants';
import { motion } from 'framer-motion';
import MatchCard from './components/MatchCard/MatchCard';
// import { useEffect } from 'react';
import React, { useState } from 'react';
const MatchesPage = () => {
    const [selectedMatchType, setSelectedMatchType] = useState('all');
    const [selectedCountry, setSelectedCountry] = useState('all');
  
    const matchTypes = ['all', 'T20', 'ODI', 'Test'];
    const countries = ['all', 'India', 'Australia', 'England', 'South Africa', 'New Zealand'];
  
    return (
      <div className="min-h-screen bg-white p-6">
        {/* Filters Section */}
        <div className="bg-white shadow-md rounded-lg mb-8 p-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Match Type
              </label>
              <select
                value={selectedMatchType}
                onChange={(e) => setSelectedMatchType(e.target.value)}
                className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {matchTypes.map((type) => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
  
            <div className="flex-1">
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Country
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country.charAt(0).toUpperCase() + country.slice(1)}
                  </option>
                ))}
              </select>
            </div>
  
            <div className="flex-none">
              <button
                onClick={() => {
                  setSelectedMatchType('all');
                  setSelectedCountry('all');
                }}
                className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
  
        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_MATCHES.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    );
  };
  
  export default MatchesPage;