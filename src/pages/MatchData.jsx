import React from "react";

const MatchData = ({ teamA, teamB, score, status, matchType, date, venue }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-blue-100">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{teamA}</h2>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-blue-500">{status}</p>
          <h3 className="text-xl font-bold text-gray-800">{score}</h3>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{teamB}</h2>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          <span className="font-bold">Type:</span> {matchType}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-bold">Date:</span> {date}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-bold">Venue:</span> {venue}
        </p>
      </div>
    </div>
  );
};

export default MatchData;
