
import React from 'react';
import { CVSection } from './VendingMachine';

interface VendingScreenProps {
  sections: CVSection[];
  selectedSection: CVSection | null;
  machineState: 'idle' | 'dispensing' | 'collecting';
  onProductSelect: (section: CVSection) => void;
}

const VendingScreen: React.FC<VendingScreenProps> = ({
  sections,
  selectedSection,
  machineState,
  onProductSelect
}) => {
  if (machineState === 'dispensing' && selectedSection) {
    return (
      <div className="h-full bg-gradient-to-b from-amber-800 to-amber-900 text-amber-300 p-4 font-mono text-sm flex flex-col justify-center">
        <div className="text-center">
          <p className="text-amber-400 font-bold animate-pulse mb-3 text-xl">⚡ DISPENSING...</p>
          <p className="text-amber-300 font-semibold text-lg">{selectedSection.title.toUpperCase()}</p>
          <p className="text-amber-200 text-sm mb-4">CODE: {selectedSection.buttonCode}</p>
          
          <div className="my-6">
            <div className="flex justify-center space-x-2 mb-4">
              <div className="w-4 h-4 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-4 h-4 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            <div className="border border-amber-500 rounded-lg p-3 bg-amber-900/50">
              <p className="text-amber-200 text-xs">
                Mechanical arm retrieving product...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (machineState === 'collecting') {
    return (
      <div className="h-full bg-gradient-to-b from-green-800 to-green-900 text-green-300 p-4 font-mono text-sm flex flex-col justify-center">
        <div className="text-center">
          <p className="text-green-400 font-bold text-xl mb-3 animate-pulse">✓ PRODUCT READY</p>
          <p className="text-green-300 text-lg font-semibold">Collection Required</p>
          <div className="border border-green-500 rounded-lg p-4 my-4 bg-green-900/50">
            <p className="text-green-200 text-sm leading-relaxed">
              Your {selectedSection?.title} is ready for pickup in the collection shelf below.
            </p>
          </div>
          <p className="text-green-400 text-sm animate-pulse">
            👇 RETRIEVE YOUR PRODUCT 👇
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gradient-to-b from-green-800 to-green-900 text-green-300 p-4 font-mono text-sm overflow-y-auto">
      <div className="text-center mb-4">
        <p className="text-green-400 font-bold mb-3 text-lg animate-pulse">
          🌟 SELECT YOUR CAREER INFO 🌟
        </p>
        <p className="text-green-300 mb-3 text-sm">Touch a product code to dispense:</p>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-xs">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onProductSelect(section)}
            className="border border-green-600 rounded-lg px-3 py-2 bg-green-900/30 hover:bg-green-800/50 transition-all duration-200 text-left hover:border-green-400"
          >
            <div className="text-green-400 font-bold">{section.buttonCode}</div>
            <div className="text-green-200 text-xs leading-tight">{section.title}</div>
          </button>
        ))}
      </div>
      
      <div className="text-center mt-4 pt-3 border-t border-green-700">
        <p className="text-green-400 text-xs animate-pulse">
          ✨ Premium Quality CV Data ✨
        </p>
        <p className="text-green-300 text-xs mt-1">
          Select • Dispense • Collect
        </p>
      </div>
    </div>
  );
};

export default VendingScreen;
