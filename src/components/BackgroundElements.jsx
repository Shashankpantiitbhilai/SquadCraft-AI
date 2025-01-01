import React from 'react';
import { CircleDot, Swords, Trophy, Timer, Flag, Target, ShieldCheck } from 'lucide-react';

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Cricket Ball */}
      <div className="absolute top-[15%] left-[10%] animate-float opacity-[0.02]">
        <div className="relative">
          <CircleDot className="w-16 h-16 text-red-600" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-[2px] bg-red-700 rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Cricket Bat */}
      <div className="absolute top-[25%] right-[15%] animate-float-delayed opacity-[0.02]">
        <Swords className="w-24 h-24 text-amber-800 transform -rotate-45" />
      </div>

      {/* Cricket Trophy */}
      <div className="absolute bottom-[20%] left-[20%] animate-float opacity-[0.02]">
        <Trophy className="w-20 h-20 text-yellow-600" />
      </div>

      {/* Scoreboard */}
      <div className="absolute top-[40%] right-[25%] animate-float-delayed opacity-[0.02]">
        <Timer className="w-24 h-24 text-gray-700" />
      </div>

      {/* Cricket Stumps */}
      <div className="absolute bottom-[30%] right-[10%] animate-float opacity-[0.02]">
        <div className="flex space-x-1 transform -rotate-12">
          <Flag className="w-16 h-16 text-amber-800" />
          <Flag className="w-16 h-16 text-amber-800" />
          <Flag className="w-16 h-16 text-amber-800" />
        </div>
      </div>

      {/* Cricket Target */}
      <div className="absolute top-[60%] left-[15%] animate-float-delayed opacity-[0.02]">
        <Target className="w-20 h-20 text-blue-600" />
      </div>

      {/* Cricket Helmet */}
      <div className="absolute top-[10%] right-[40%] animate-float opacity-[0.02]">
        <ShieldCheck className="w-20 h-20 text-gray-700" />
      </div>

      {/* Additional Cricket Ball */}
      <div className="absolute bottom-[15%] left-[40%] animate-float-delayed opacity-[0.02]">
        <div className="relative">
          <CircleDot className="w-12 h-12 text-red-600" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-[2px] bg-red-700 -rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
}