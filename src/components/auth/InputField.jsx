import React from 'react';

const InputField = ({ icon, type, name, placeholder, value, onChange }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full pl-12 pr-4 py-3 border border-blue-200 rounded-lg 
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300
        bg-white/50 "
      />
    </div>
  );
};

export default InputField;