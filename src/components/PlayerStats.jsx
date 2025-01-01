import React from 'react';
import { Trophy, XCircle, Activity } from 'lucide-react';

export function PlayerStats({ matches, wins, losses }) {
  return (
    <div className="flex gap-6">
      <div className="flex items-center gap-2">
        <Activity className="w-5 h-5 text-blue-600" />
        <div>
          <p className="text-sm text-gray-600">Matches</p>
          <p className="font-semibold text-gray-900">{matches}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Trophy className="w-5 h-5 text-green-600" />
        <div>
          <p className="text-sm text-gray-600">Wins</p>
          <p className="font-semibold text-gray-900">{wins}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <XCircle className="w-5 h-5 text-red-600" />
        <div>
          <p className="text-sm text-gray-600">Losses</p>
          <p className="font-semibold text-gray-900">{losses}</p>
        </div>
      </div>
    </div>
  );
}