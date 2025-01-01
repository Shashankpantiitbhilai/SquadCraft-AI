import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './PlayerStats.css';

import cricketer from "./assets/cricketer.png";
import bowlerIcon from "./assets/bowler.png";
import batsmanIcon from "./assets/batsmen.png";
 // You will need axios to make API calls

const ReasonDialog = ({ isOpen, onClose, name, reason }) => {
  const [typedReason, setTypedReason] = useState('');
  const reasonRef = useRef('');

  // Typewriter effect for reason
  useEffect(() => {
    if (!isOpen) return;

    reasonRef.current = reason || 'No specific reason provided.';
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= reasonRef.current.length) {
        setTypedReason(reasonRef.current.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Typing speed

    return () => clearInterval(typingInterval);
  }, [isOpen, reason]);

  if (!isOpen) return null;

  return (
    <div className="reason-dialog-overlay">
      <div className="reason-dialog-content animate-slide-in">
        <button className="reason-dialog-close" onClick={onClose}>
          <X size={24} />
        </button>
        <h2>Why {name} was Chosen?</h2>
        <p>{typedReason}</p>
      </div>
    </div>
  );
};

const PlayerStats = ({ player, isOpen, onClose }) => {
  const [isReasonDialogOpen, setIsReasonDialogOpen] = useState(false);
  const [reason, setReason] = useState(''); // Reason will be updated once we get it from backend

  if (!player) return null;

  const { name, role, expectedFantasyPoints, states } = player;
console.log("player",player)
  // Select player image based on role with fallback
  const getPlayerImage = () => {
    return cricketer;
  };

  // Role icon selection
  const RoleIcon = () => {
    switch (role.toLowerCase()) {
      case 'bowler':
        return <img src={bowlerIcon} alt="Bowler" className="role-icon-small bowler" />;
      case 'batsman':
        return <img src={batsmanIcon} alt="Batsman" className="role-icon-small batsman" />;
      default:
        return <img src={cricketer} alt="All-rounder" className="role-icon-small all-rounder" />;
    }
  };

  const ProgressBar = ({ label, value, maxValue, color }) => (
    <div className="progress-stat animate-fade-in">
      <div className="progress-header">
        <span className="stat-label">{label}</span>
        <span className="stat-value">{value}</span>
      </div>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${Math.min((value / maxValue) * 100, 100)}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );

  // Fetch reason from backend on button click
 const fetchReason = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5000/get-reason', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        playerName: name,
        playerData: player,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch reason');
    }

    const data = await response.json();
    setReason(data.description || 'No description available');
    setIsReasonDialogOpen(true);
  } catch (error) {
    console.error('Error fetching reason:', error);
    setReason('Error fetching reason from backend');
    setIsReasonDialogOpen(true);
  }
};

  return (
    <>
      <div className={`player-stats-sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn animate-pulse" onClick={onClose}>×</button>
        
        {/* Animated Player Image with Role Icon */}
        <div className="player-image-container animate-bounce-in">
          <img 
            src={getPlayerImage()} 
            alt={name} 
            className="player-image" 
          />
          <div className="role-icon-corner">
            <RoleIcon />
          </div>
        </div>

        {/* Player Header */}
        <div className="player-header animate-slide-in">
          <h2>{name}</h2>
          <p className="player-role">{role}</p>
        </div>

        {/* Fantasy Points */}
        <div className="player-fantasy-points animate-fade-in">
          <h3>Expected Fantasy Points</h3>
          <p>{expectedFantasyPoints || 'N/A'}</p>
        </div>

        {/* Performance Statistics */}
        <div className="player-stats-container animate-slide-in-right">
          <h3>Performance Statistics</h3>
          <div className="stats-grid">
           <div className="stats-grid">
  <ProgressBar
    label="Strike Rate"
    value={states?.strike_rate || 112.344}
    maxValue={150}
    color="#FF6B6B"
  />
  <ProgressBar
    label="Economy"
    value={states?.economy || 7.889}
    maxValue={10}
    color="#4ECDC4"
  />
  <ProgressBar
    label="Total Fantasy Points"
    value={states?.fantasy_points || 112}
    maxValue={200}
    color="#45B7D1"
  />
  <ProgressBar
    label="Runs Conceded"
    value={states?.runs_conceded || 35}
    maxValue={100}
    color="#FF9F43"
  />
  <ProgressBar
    label="Overs Bowled"
    value={states?.overs_bowled || 4}
    maxValue={10}
    color="#A29BFE"
  />
  <ProgressBar
    label="Wickets"
    value={states?.wickets || 3}
    maxValue={10}
    color="#00CEC9"
  />
  <ProgressBar
    label="Maidens"
    value={states?.maidens || 1}
    maxValue={5}
    color="#74B9FF"
  />
  <ProgressBar
    label="Runs"
    value={states?.runs || 75}
    maxValue={150}
    color="#E17055"
  />
  <ProgressBar
    label="Fours"
    value={states?.fours || 8}
    maxValue={20}
    color="#6C5CE7"
  />
  <ProgressBar
    label="Sixes"
    value={states?.sixes || 3}
    maxValue={10}
    color="#00B894"
  />
  <ProgressBar
    label="Balls Faced"
    value={states?.balls_faced || 45}
    maxValue={100}
    color="#FAB1A0"
  />
</div>

          </div>
        </div>

        {/* Reason Dialog Trigger */}
        <div className="player-description animate-fade-in">
          <h3>Why {name} was Chosen?</h3>
          <button 
            className="reason-trigger-btn"
            onClick={fetchReason} // Call the function to fetch reason
          >
            View Reason
          </button>
        </div>
      </div>

      {/* Reason Dialog */}
      <ReasonDialog 
        isOpen={isReasonDialogOpen}
        onClose={() => setIsReasonDialogOpen(false)}
        name={name}
        reason={reason} // Pass the reason that was fetched from the backend
      />
    </>
  );
};

export default PlayerStats;
