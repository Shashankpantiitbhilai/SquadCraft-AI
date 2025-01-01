import React from 'react';

export function HelperButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 left-8 w-24 h-24 transition-transform hover:scale-110 focus:outline-none"
    >
      <img
        src='../public/helper.jpg'
        alt="Helper Robot"
        className={`w-full h-full object-contain transition-transform duration-300 `}
      />
    </button>
  );
}