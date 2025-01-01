import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { 
  setPlayersTeam1, 
  setPlayersTeam2, 
  setPredictedPlayers 
} from '../redux/slices/playersSlice';
import { 
  Trophy, 
  Clock, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';
import wi from "../assets/wi.jpeg"
import eng from "../assets/eng.png"
export function MatchDetails() {
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const { team1, team2, date, matchType } = useSelector((store) => store.match);
  const { playersTeam1, playersTeam2 } = useSelector((store) => store.players);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getAllPlayers = async () => {
      console.log(date,team1,team2,matchType,playersTeam1,playersTeam2)
      try {
        setIsLoading(true);
        const response = await fetch(
          "http://127.0.0.1:5000/api/v1/getAllPlayers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              date: date,
              matchType: matchType,
              team1: team1,
              team2: team2,
            }),
          }
        );

        const data = await response.json();
        console.log(data)
        if (response.status === 200 && data.status) {
          const match = data.filteredMatches[0];
          const players1 = match["players_team1"].split(", ");
          const players2 = match["players_team2"].split(", ");
          console.log(players1,players2)
          dispatch(setPlayersTeam1(players1));
          dispatch(setPlayersTeam2(players2));
          setTeam1Players(players1);
          setTeam2Players(players2);
        } else {
          throw new Error(data.message || "Failed to fetch players");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
                                   
    getAllPlayers();
  }, [date, matchType, team1, team2, dispatch]);

 const handleGeneratePredictions = async () => {
  try {
    setIsLoading(true);
    const response = await fetch(
      "http://127.0.0.1:5000/api/v2/predictPlayers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date:date,
          playersTeam1: playersTeam1,
          playersTeam2: playersTeam2,
          matchType: matchType,
          team1: team1,
          type:"auto"
        }),
      }
    );

    const data = await response.json();

    if (response.status === 200 && data.status) {
      // Combine `selectedPlayers` with `playerAnalysis` where applicable
      console.log("data",data)
      console.log(data.selectedPlayers,data.playerAnalysis)
      const detailedPlayerData = data.selectedPlayers.map((player) => ({
        name: player.player, // Player name from `selectedPlayers`
        role: player.role || "Unknown", // Role from `selectedPlayers`
        expectedFantasyPoints: player.nextFantasyPoint || 0, // Fantasy points from `selectedPlayers`
        description: data.playerAnalysis?.find(p => p.player === player[0])?.description || "No description available", // Description from `playerAnalysis`
        states: data.playerAnalysis?.find(p => p.player === player.player)?.stats || {}, // States data from `playerAnalysis`
      }));
console.log("detailed player",detailedPlayerData)
      // Dispatch the merged data
      dispatch(setPredictedPlayers(detailedPlayerData));
      navigate("/all-players");
    } else {
      throw new Error(data.message || "Prediction failed");
    }
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};


  const PlayerList = ({ players, teamName }) => (
    <div className="bg-gray-50 rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-bold mb-3 text-gray-800">{teamName} Players</h3>
      <div className="grid grid-cols-2 gap-2">
        {players.map((player, index) => (
          <div 
            key={index} 
            className="bg-white p-2 rounded-md text-sm hover:bg-blue-50 transition-colors"
          >
            {player}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 text-white p-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Trophy className="w-10 h-10" />
            <h1 className="text-2xl font-bold">Match Details</h1>
          </div>
          <div className="text-sm">
            {date} | {matchType}
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
            
              <h2 className="text-2xl font-bold">{team1}</h2>
            </div>
            <div className="text-3xl font-bold text-gray-400">VS</div>
            <div className="flex items-center space-x-4">
            
              <h2 className="text-2xl font-bold">{team2}</h2>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 text-gray-700">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>Townsville</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>7:50 PM</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <PlayerList players={team1Players} teamName={team1} />
            <PlayerList players={team2Players} teamName={team2} />
          </div>

          <button
            onClick={handleGeneratePredictions}
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-2 
            bg-blue-600 text-white py-3 rounded-lg 
            hover:bg-blue-700 transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed"
            >
            {isLoading ? 'Processing...' : 'Generate Predictions'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
            </>
  );
}

export default MatchDetails;