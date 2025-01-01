import React from 'react';

const SocialButton = ({ icon, text }) => {
  return (
    <button
      type="button"
      className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-blue-200 
      rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02]"
    >
      {icon}
      <span className="text-blue-700 font-medium">{text}</span>
    </button>
  );
};

export default SocialButton;