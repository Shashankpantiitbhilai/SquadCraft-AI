import React from "react";
import Header from "../components/playerJustification/Header";
import PlayerStats from "../components/playerJustification/PlayerStats";
import PredictedTeam from "../components/playerJustification/PredictedTeam";

const PlayerJustification = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-gray-100 p-4 overflow-x-hidden">
      <div className="flex-none mb-4">
        <Header />
      </div>
      
      <div className="flex-grow flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 bg-white border border-gray-300 p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
          <PlayerStats />
        </div>
        <div className="flex-1 bg-white border border-gray-300 p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
          <PredictedTeam />
        </div>
      </div>
    </div>
  );
};

export default PlayerJustification;