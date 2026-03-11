import { House } from 'lucide-react';
import React from 'react';

const Buttons = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-red-600 hover:bg-red-500 text-white
        font-medium text-sm px-3 py-1.5 rounded-md
        flex items-center gap-1
        focus:outline-none focus:ring-red-300
        transition-all duration-150 ease-in-out
      "
    >
      <House className="w-4 h-4" />
      {label}
    </button>
  );
};

export default Buttons;