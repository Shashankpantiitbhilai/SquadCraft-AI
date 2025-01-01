import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Predicted.css';
import CornerHelp from './CornerHelp';
import PlayerStats from './PlayerStats.jsx';
import  bowler  from "./assets/bowler.png";
import batsmen from "./assets/batsmen.png";
import cricketer from "./assets/cricketer.png"
import Header from './components/Header/Header.jsx';
import { 
  UserIcon, 
  CrownIcon, 
  StarIcon 
} from 'lucide-react';

// Cricket-specific role icons
const CricketIcons = {
  allRounder: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="role-icon all-rounder-icon w-6 h-6">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9.75 8.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zm6.75 5.25a2.25 2.25 0 10-4.5 0V16a.75.75 0 001.5 0v-2.25a.75.75 0 111.5 0V16a.75.75 0 001.5 0v-2.25z" clipRule="evenodd" />
    </svg>
  ),
  wicketKeeper: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="role-icon wicket-keeper-icon w-6 h-6">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 8.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM9 15.75a2.25 2.25 0 100 4.5h6a2.25 2.25 0 100-4.5H9z" clipRule="evenodd" />
    </svg>
  )
};

function Predicted() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Fetch predicted players from Redux store
  const { predictedPlayers } = useSelector((store) => store.players);
  console.log("predicted",predictedPlayers,predictedPlayers.length)
  // Function to handle player click
  const handlePlayerClick = (player) => {
    if (selectedPlayer === player && isSidebarOpen) {
      handleCloseSidebar();
    } else {
      setSelectedPlayer(player);
      setIsSidebarOpen(true);
    }
  };

  // Function to close sidebar
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedPlayer(null);
  };

  // Find captain and vice-captain based on expected fantasy points
 const sortedPlayers = [...predictedPlayers]
  .sort((a, b) => (b.expectedFantasyPoints || 0) - (a.expectedFantasyPoints || 0))
  .slice(0, 11);
  const captain = sortedPlayers[0];
  const viceCaptain = sortedPlayers[1];

  const pageStyle = {
    margin: 0,
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
  };

  // Function to get role icon
  const getRoleIcon = (role) => {
    const normalizedRole = role.toLowerCase();
    switch(true) {
      case normalizedRole.includes('batsman'):
        return <img src={batsmen} alt="Batsman Icon" className="role-icon batsman-icon" />;
      case normalizedRole.includes('bowler'):
        return <img src={bowler} alt="Bowler Icon" className="role-icon bowler-icon" />;
      case normalizedRole.includes('all-rounder'):
        return CricketIcons.allRounder(); // Keep existing icon for all-rounder
      case normalizedRole.includes('wicket-keeper'):
        return CricketIcons.wicketKeeper(); // Keep existing icon for wicket-keeper
      default:
        return <UserIcon className="role-icon default-icon" />;
    }
  };

  return (
    <div style={pageStyle}>
      <Header />
      <CornerHelp />
      <div className="field">
        <div className="darkbox1"></div>
        <div className="darkbox2"></div>
        <div className="darkbox3"></div>
        <div className="darkbox4"></div>
        <div className="darkbox5"></div>
        <div className="darkbox6"></div>
        <div className="darkbox7"></div>
        <div className="darkbox8"></div>
        <div className="darkbox9"></div>
        <div className="darkbox10"></div>
        <div className="darkbox11"></div>
        <div className="pitch"></div>

        {predictedPlayers?.map((player, index) => {
          // Determine special designation
          const isCaptain = player === captain;
          const isViceCaptain = player === viceCaptain;

          return (
            <div
              key={player._id || index}
              className={`players${index + 1} player-container`}
              onClick={() => handlePlayerClick(player)}
            >
              <div className="player-details">
                {/* Player Dummy Image */}
                <img
                  src={cricketer} // Placeholder image for cricketer
                  alt={player.name}
                  className="player-image"
                />
                {/* Role Icon */}
                {getRoleIcon(player.role)}
                
                {/* Player Name */}
                <span className="player-name">{player.name}</span>
                
                {/* Captain/Vice-Captain Indicators */}
                {isCaptain && (
                  <div className="captain-badge captain">
                    <div className="badge-circle red"></div> {/* Red circle for Captain */}
                    <CrownIcon size={16} color="gold" /> Captain
                  </div>
                )}
                {isViceCaptain && (
                  <div className="captain-badge vice-captain">
                    <div className="badge-circle blue"></div> {/* Blue circle for Vice-Captain */}
                    <StarIcon size={16} color="silver" /> Vice Captain
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Sidebar Component */}
        {isSidebarOpen && (
          <PlayerStats
            player={selectedPlayer}
            isOpen={isSidebarOpen}
            onClose={handleCloseSidebar}
          />
        )}
      </div>
    </div>
  );
}

export default Predicted;
