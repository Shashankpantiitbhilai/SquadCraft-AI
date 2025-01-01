import React, { useRef } from 'react';
import { Camera } from 'lucide-react';

export function ProfileImage({ imageUrl, name, onImageChange }) {
  const fileInputRef = useRef(null);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-48 h-64">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={onImageChange}
          accept="image/*"
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-2 right-2 p-2 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
        >
          <Camera className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent px-4 py-1 rounded-lg shadow-sm">
          {name}
        </h2>
      </div>
    </div>
  );
}