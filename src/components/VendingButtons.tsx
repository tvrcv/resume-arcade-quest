
import React from 'react';
import { CVSection } from './VendingMachine';

interface VendingButtonsProps {
  sections: CVSection[];
  onProductSelect: (section: CVSection) => void;
  disabled: boolean;
}

const VendingButtons: React.FC<VendingButtonsProps> = ({
  sections,
  onProductSelect,
  disabled
}) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onProductSelect(section)}
          disabled={disabled}
          className={`
            relative bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 
            border-4 border-gray-600 rounded-xl p-3 text-center
            hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 
            active:from-gray-900 active:via-gray-800 active:to-gray-700
            transition-all duration-150 transform-gpu
            hover:scale-105 active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg hover:shadow-xl
            ${disabled ? '' : 'hover:-translate-y-0.5'}
          `}
          style={{
            boxShadow: `
              0 4px 8px rgba(0,0,0,0.3),
              inset 0 1px 2px rgba(255,255,255,0.1),
              inset 0 -1px 2px rgba(0,0,0,0.2)
            `
          }}
        >
          {/* Button LED indicator */}
          <div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full shadow-lg animate-pulse"></div>
          
          <div className="text-yellow-300 font-bold font-mono text-xl drop-shadow-lg">
            {section.buttonCode}
          </div>
          <div className="text-yellow-200 text-xs font-mono mt-1 leading-tight">
            {section.title}
          </div>
          
          {/* Button press effect */}
          <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-150"></div>
        </button>
      ))}
    </div>
  );
};

export default VendingButtons;
