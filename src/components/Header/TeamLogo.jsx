import React from 'react';

const TeamLogo = ({ country, flagUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 rounded-full border-4 border-blue-900 overflow-hidden shadow-xl transform transition-transform hover:scale-105">
        <img 
          src={flagUrl} 
          alt={`${country} flag`} 
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="mt-3 text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">{country}</h2>
    </div>
  );
};

export default TeamLogo;