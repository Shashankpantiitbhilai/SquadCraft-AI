import React from 'react';
import { User } from 'lucide-react';
import { getRoleColor } from '../../utils/roleStyles';

const PlayerCard = ({ name, role, number, isCaptain, isViceCaptain }) => {
  return (
    <div className={`${getRoleColor(role)} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:translate-x-1 border border-blue-100`}>
      <div className="flex items-center space-x-4">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-full shadow-md">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-blue-900 text-lg">
            {name} 
            {isCaptain && <span className="ml-2 px-2 py-0.5 bg-blue-900 text-white text-sm rounded-full">C</span>} 
            {isViceCaptain && <span className="ml-2 px-2 py-0.5 bg-blue-700 text-white text-sm rounded-full">VC</span>}
          </h3>
          <div className="flex items-center space-x-3 mt-1">
            <span className="bg-white px-3 py-1 rounded-full text-blue-800 text-sm font-medium shadow-sm border border-blue-100">
              {role}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              #{number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;