import React, { useState } from "react";
import "../styles/AllPlayers.css";
import Header from '../components/Header/Header';
import LazyLettuce from "../components/AllPlayers/FloatingCard.jsx";
import TeamSection from "../components/AllPlayers/TeamSection.jsx";
import { useSelector } from "react-redux";


function AllPlayers() {
  const [hoveredPlayer, setHoveredPlayer] = useState(null);
  const [hoveredPlayerDetails, setHoveredPlayerDetails] = useState(null);
  const { predictedPlayers } = useSelector((store) => store.players);
  console.log(predictedPlayers)
  const handleMouseLeave = () => {
    setHoveredPlayer(null);
    setHoveredPlayerDetails(null);
  };

  const listPlayers = predictedPlayers.map((item, index) => {
    return item[0];
  });

  const handleMouseEnter = (player) => {
    const index = player - 1;
    setHoveredPlayer(index);
    setHoveredPlayerDetails(listPlayers[index]);
  };

  return (
    <>
    <Header/>
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

      {listPlayers.map((playerName, index) => (
        <>
          <div
            className={`players${index + 1}`}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={() => handleMouseLeave}
            ></div>
          <div>
            {
              <div className="player-info">
                <LazyLettuce playerName={hoveredPlayerDetails} />
              </div>
            }
          </div>
        </>
      ))}
    </div>
      </>
  );
}

export default AllPlayers;
