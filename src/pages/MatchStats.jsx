import React from 'react';
import TeamLogo from '../components/Header/TeamLogo';
import MatchScore from '../components/Header/MatchScore';
import InfoPanel from '../components/MatchInfo/InfoPanel';
import TeamPlayers from '../components/Players/TeamPlayers';
// import { matchData } from '../../Backend/data/matchData';
const matchData = [
  {
    _id: "6742ec2b099e96e36cd35d80",
    date: "2004-01-16",
    match_type: "ODI",
    team1: "Australia",
    team2: "Zimbabwe",
  },
  // ... other match items (kept as in original)
];
function MatchStats() {
  return (
    <>
      <div className=" bg-gradient-to-br from-blue-50 to-blue-100 ">
        <div className=" mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-blue-100">
            <div className="flex justify-center">
              <TeamLogo country={matchData.team1} flagUrl={matchData.team1.flagUrl} />
              <MatchScore 
                status="Live"
                score={{ team1: "285/3", team2: "0/0" }}
              />
              <TeamLogo country={matchData.team2} flagUrl={matchData.team2.flagUrl} />
            </div>
          </div>

          <InfoPanel
            tournament="ICC World Cup 2023"
            matchType="ODI International"
            date="15 November 2023"
            venue="Melbourne Cricket Ground"
            location="Melbourne, Australia"
          />

          <TeamPlayers
            team1={matchData.team1}
            team2={matchData.team2}
            />
        </div>
      </div>
    </>
  );
}

export default MatchStats;
