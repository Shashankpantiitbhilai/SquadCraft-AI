import React from 'react';
import PlayerList from './PlayerList';

const TeamPlayers = ({ team1, team2 }) => {
  return (
    <>
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-6">
            {team1.name}
          </h3>
          <PlayerList players={team1.players} />
        </div>
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-6">
            {team2.name}
          </h3>
          <PlayerList players={team2.players} />
        </div>
      </div>
    </div>
    </>
  );
};

export default TeamPlayers;