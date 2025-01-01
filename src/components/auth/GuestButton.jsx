import React from 'react';
import { UserCircle } from 'lucide-react';

const GuestButton = () => {
  const handleGuestAccess = () => {
    // Handle guest access logic here
  };

  return (
    <button
      onClick={handleGuestAccess}
      className="group w-full flex items-center justify-center gap-2 px-4 py-3 
      bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg
      transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
    >
      <UserCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
      <span className="font-medium">Continue as Guest</span>
    </button>
  );
};

export default GuestButton;