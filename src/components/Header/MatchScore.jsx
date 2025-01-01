import React from 'react';

const MatchScore = ({ status, score }) => {
  return (
    <>
    <div className="flex flex-col items-center mx-12">
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">VS</div>
      {score && (
        <div className="mt-3 text-2xl font-bold text-blue-900">
          {score.team1} - {score.team2}
        </div>
      )}
      <div className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">{status}</div>
    </div>
      </>
  );
};

export default MatchScore;