import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = ({ players }) => {
  return (
    <div className="h-[500px] overflow-y-auto pr-2 custom-scrollbar">
      <div className="grid gap-3">
        {players.map((player) => (
          <PlayerCard key={player.number} {...player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;