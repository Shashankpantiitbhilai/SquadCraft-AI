import React from "react";
import "../styles/Match.css";
import { motion } from "framer-motion";

const Match = () => {
  // Mock Data
  const matchData = {
    team1: {
      name: "India",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png",
      players: [
        { name: "Virat Kohli", role: "Batsman", number: "18" },
        { name: "Rohit Sharma", role: "Batsman", number: "45" },
        { name: "KL Rahul", role: "Wicket-keeper", number: "1" },
        { name: "Jasprit Bumrah", role: "Bowler", number: "93" },
        { name: "R Ashwin", role: "Bowler", number: "99" },
      ],
    },
    team2: {
      name: "Australia",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png",
      players: [
        { name: "Steve Smith", role: "Batsman", number: "49" },
        { name: "David Warner", role: "Batsman", number: "31" },
        { name: "Pat Cummins", role: "Bowler", number: "30" },
        { name: "Mitchell Starc", role: "Bowler", number: "56" },
        { name: "Alex Carey", role: "Wicket-keeper", number: "4" },
      ],
    },
    matchDetails: {
      venue: "Melbourne Cricket Ground",
      date: "15 November 2023",
      time: "7:30 PM IST",
      matchType: "T20 International",
      series: "Bilateral Series",
    },
  };

  return (
    <div className="match-container">
      {/* Match Header */}
      <div className="match-header">
        <motion.div
          className="team-info"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={matchData.team1.logo}
            alt={matchData.team1.name}
            className="team-logo"
          />
          <h2>{matchData.team1.name}</h2>
        </motion.div>

        <motion.div
          className="match-vs"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          VS
        </motion.div>

        <motion.div
          className="team-info"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={matchData.team2.logo}
            alt={matchData.team2.name}
            className="team-logo"
          />
          <h2>{matchData.team2.name}</h2>
        </motion.div>
      </div>

      {/* Match Details Section */}
      <motion.div
        className="match-details"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3>Match Information</h3>
        <div className="details-grid">
          <div className="detail-item">
            <span className="label">Venue:</span>
            <span>{matchData.matchDetails.venue}</span>
          </div>
          <div className="detail-item">
            <span className="label">Date:</span>
            <span>{matchData.matchDetails.date}</span>
          </div>
          <div className="detail-item">
            <span className="label">Time:</span>
            <span>{matchData.matchDetails.time}</span>
          </div>
          <div className="detail-item">
            <span className="label">Match Type:</span>
            <span>{matchData.matchDetails.matchType}</span>
          </div>
        </div>
      </motion.div>

      {/* Players Section */}
      <div className="players-section">
        <h3>Playing XI</h3>
        <div className="players-table">
          <div className="table-header">
            <div className="team-header">{matchData.team1.name}</div>
            <div className="team-header">{matchData.team2.name}</div>
          </div>

          <div className="players-rows">
            {matchData.team1.players.map((player1, index) => (
              <motion.div
                className="player-row"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="player-cell">
                  <span className="player-number">{player1.number}</span>
                  <div className="player-info">
                    <div className="player-name">{player1.name}</div>
                    <div className="player-role">{player1.role}</div>
                  </div>
                </div>
                <div className="player-cell">
                  <span className="player-number">
                    {matchData.team2.players[index].number}
                  </span>
                  <div className="player-info">
                    <div className="player-name">
                      {matchData.team2.players[index].name}
                    </div>
                    <div className="player-role">
                      {matchData.team2.players[index].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
