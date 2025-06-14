
import React from 'react';
import { CVSection } from './VendingMachine';

interface VendingScreenProps {
  sections: CVSection[];
  selectedSection: CVSection | null;
  machineState: 'idle' | 'dispensing' | 'collecting';
  onProductSelect: (section: CVSection) => void;
}

const VendingScreen: React.FC<VendingScreenProps> = ({
  sections = [],
  selectedSection,
  machineState,
  onProductSelect
}) => {
  if (machineState === 'dispensing' && selectedSection) {
    return (
      <div className="h-full bg-gradient-to-b from-amber-800 to-amber-900 text-amber-300 p-6 font-mono text-sm flex flex-col justify-center">
        <div className="text-center">
          <p className="text-amber-400 font-bold animate-pulse mb-4 text-2xl">⚡ DISPENSING...</p>
          <p className="text-amber-300 font-semibold text-xl mb-2">{selectedSection.title.toUpperCase()}</p>
          <p className="text-amber-200 text-lg mb-6">CODE: {selectedSection.buttonCode}</p>
          
          <div className="my-8">
            <div className="flex justify-center space-x-3 mb-6">
              <div className="w-6 h-6 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-6 h-6 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            <div className="border-2 border-amber-500 rounded-lg p-4 bg-amber-900/50">
              <p className="text-amber-200 text-base">
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
      <div className="h-full bg-gradient-to-b from-green-800 to-green-900 text-green-300 p-6 font-mono text-sm flex flex-col justify-center">
        <div className="text-center">
          <p className="text-green-400 font-bold text-2xl mb-4 animate-pulse">✓ PRODUCT READY</p>
          <p className="text-green-300 text-xl font-semibold mb-4">Collection Required</p>
          <div className="border-2 border-green-500 rounded-lg p-6 my-6 bg-green-900/50">
            <p className="text-green-200 text-lg leading-relaxed">
              Your {selectedSection?.title} is ready for pickup in the collection shelf below.
            </p>
          </div>
          <p className="text-green-400 text-lg animate-pulse">
            👇 RETRIEVE YOUR PRODUCT 👇
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gradient-to-b from-green-800 to-green-900 text-green-300 p-6 font-mono overflow-y-auto">
      <div className="text-center mb-6">
        <p className="text-green-400 font-bold mb-4 text-2xl animate-pulse">
          🌟 SELECT YOUR CAREER INFO 🌟
        </p>
        <p className="text-green-300 mb-4 text-lg">Touch a product code to dispense:</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onProductSelect(section)}
            className="border-2 border-green-600 rounded-xl px-4 py-6 bg-green-900/40 hover:bg-green-800/60 transition-all duration-300 text-left hover:border-green-400 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="text-green-400 font-bold text-2xl mb-2">{section.buttonCode}</div>
            <div className="text-green-200 text-lg leading-tight">{section.title}</div>
            <div className="text-green-300 text-sm mt-2 opacity-75">Click to dispense</div>
          </button>
        ))}
      </div>
      
      <div className="text-center mt-6 pt-4 border-t-2 border-green-700">
        <p className="text-green-400 text-lg animate-pulse">
          ✨ Premium Quality CV Data ✨
        </p>
        <p className="text-green-300 text-base mt-2">
          Select • Dispense • Collect
        </p>
      </div>
    </div>
  );
};

export default VendingScreen;
