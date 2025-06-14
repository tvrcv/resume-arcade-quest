
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
    <div className="grid grid-cols-2 gap-2">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onProductSelect(section)}
          disabled={disabled}
          className={`
            bg-gray-800 border-4 border-gray-600 rounded-lg p-2 text-center
            hover:bg-gray-700 active:bg-gray-900 transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-inner
          `}
        >
          <div className="text-yellow-300 font-bold font-mono text-lg">
            {section.buttonCode}
          </div>
          <div className="text-yellow-200 text-xs font-mono mt-1">
            {section.title}
          </div>
        </button>
      ))}
    </div>
  );
};

export default VendingButtons;
