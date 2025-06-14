
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
    <div className="h-full bg-gradient-to-b from-green-800 to-green-900 text-green-300 p-4 font-mono overflow-y-auto">
      <div className="text-center mb-4">
        <p className="text-green-400 font-bold mb-3 text-xl animate-pulse">
          🌟 CV-MATIC SELECTIONS 🌟
        </p>
        <p className="text-green-300 mb-3 text-sm">Touch a product code to dispense:</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onProductSelect(section)}
            className="group relative border-2 border-green-600 rounded-lg px-3 py-4 bg-green-900/40 hover:bg-green-800/60 transition-all duration-300 text-left hover:border-green-400 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {/* Product preview image */}
            <div className="w-8 h-8 mx-auto mb-2 rounded overflow-hidden border border-green-500">
              <img 
                src={section.productImage} 
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product code */}
            <div className="text-green-400 font-bold text-lg text-center mb-1">
              {section.buttonCode}
            </div>
            
            {/* Product title */}
            <div className="text-green-200 text-xs leading-tight text-center">
              {section.title}
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            
            {/* Selection indicator */}
            <div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
          </button>
        ))}
      </div>
      
      <div className="text-center mt-4 pt-3 border-t border-green-700">
        <p className="text-green-400 text-sm animate-pulse">
          ✨ Premium CV Data ✨
        </p>
        <p className="text-green-300 text-xs mt-1">
          Select • Dispense • Collect
        </p>
      </div>
    </div>
  );
};

export default VendingScreen;
