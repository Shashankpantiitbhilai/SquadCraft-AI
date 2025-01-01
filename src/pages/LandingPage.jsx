import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MatchCard from "../components/landingPage/MatchCard";
import PredictionCard from "../components/landingPage/PredictionCard";

const predictionData = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/747cf5db95bf410e4cf487794b5ef9f04caa2e717cc827978999c41c149b2672?placeholderIfAbsent=true&apiKey=06101b99e1384fe5b76eade523a00afd",
  },
  // ... other prediction items (kept as in original)
];

const defaultMatches = [
  {
    _id: "6742ec2b099e96e36cd35d80",
    date: "2004-01-16",
    match_type: "ODI",
    team1: "Australia",
    team2: "Zimbabwe",
  },
  // ... other match items (kept as in original)
];

export default function RefinedMatchesPage() {
  const [filteredMatches, setFilteredMatches] = useState(defaultMatches);
  const navigate = useNavigate();

  const handleViewAllMatches = () => {
    navigate("/all-matches");
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="" 
              alt="Logo" 
              className="w-12 h-12 bg-blue-100 rounded-full p-2" 
            />
            <h1 className="text-2xl font-bold text-blue-800">Team Predictor</h1>
          </div>
          
          <nav className="flex items-center space-x-6">
            <a 
              href="/tutorial" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Tutorial
            </a>
            <a 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a href="/profile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="User Icon"
                className="w-10 h-10 rounded-full hover:ring-2 hover:ring-blue-500 transition-all"
              />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/884af84ee958f518b64b84e197a25a517e0423fea8c0d5b6f16aea97832fc09f?placeholderIfAbsent=true&apiKey=06101b99e1384fe5b76eade523a00afd"
          alt="Cricket match banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4 max-w-2xl">
            Predict Cricket Matches & Challenge Your Cricket Knowledge
          </h2>
          <p className="text-xl text-blue-100 max-w-xl">
            Make predictions, track your performance, and compete with cricket fans worldwide
          </p>
        </div>
      </div>

      {/* Matches Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Upcoming Matches</h2>
          <button 
            onClick={handleViewAllMatches}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Matches
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatches.map((match, index) => (
            <MatchCard
              key={index}
              teamA={match.team1}
              teamB={match.team2}
              timeLeft="33h"
              matchImage="https://cdn.builder.io/api/v1/image/assets/TEMP/7e881b91630688629d80a439b9e335565a2358f7ff93cddca5c696074aea755f?placeholderIfAbsent=true&apiKey=06101b99e1384fe5b76eade523a00afd"
            />
          ))}
        </div>
      </section>

      {/* Predictions Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">Your Predictions</h2>
            <button className="text-blue-600 hover:text-blue-800 transition-colors">
              View All Predictions
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {predictionData.map((prediction, index) => (
              <PredictionCard key={index} {...prediction} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}