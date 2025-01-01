import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const InfoPanel = ({ tournament, matchType, date, venue, location }) => {
  return (
    <>
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-blue-100">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-6">
        {tournament}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center">
          <Calendar className="w-6 h-6 mr-3 text-blue-600" />
          <span className="text-blue-900 font-medium">{date}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-3 text-blue-600" />
          <span className="text-blue-900 font-medium">{venue}, {location}</span>
        </div>
      </div>
      <div className="mt-6">
        <span className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold shadow-md">
          {matchType}
        </span>
      </div>
    </div>
    </>
  );
};

export default InfoPanel;