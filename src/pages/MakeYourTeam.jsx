import React from "react";
import Header from "../components/makeYourTeam/Header";
import PredictedXI from "../components/makeYourTeam/PredictedTeam";
import MatchDetails from "../components/makeYourTeam/TeamStats";

const MakeYourTeam = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100 p-4">
      <div className="flex-none mb-4">
        <Header />
      </div>

      <div className="flex-grow flex space-x-4">
        <div className="flex-1 bg-white border border-gray-300 p-4 rounded-lg">
          <MatchDetails />
        </div>
        <div className="flex-1 bg-white border border-gray-300 p-4 rounded-lg">
          <PredictedXI />
        </div>
      </div>
    </div>
  );
};

export default MakeYourTeam;
