
import React from 'react';
import { CVSection } from './VendingMachine';

interface VendingScreenProps {
  selectedSection: CVSection | null;
  isDispensing: boolean;
  showProduct: boolean;
  onReset: () => void;
}

const VendingScreen: React.FC<VendingScreenProps> = ({
  selectedSection,
  isDispensing,
  showProduct,
  onReset
}) => {
  if (showProduct && selectedSection) {
    return (
      <div className="h-full bg-green-900 text-green-300 p-3 font-mono text-xs">
        <div className="text-center mb-2">
          <p className="text-green-400 font-bold">ENJOY YOUR SELECTION!</p>
          <p className="text-green-300">{selectedSection.title}</p>
        </div>
        <div className="text-center">
          <button 
            onClick={onReset}
            className="bg-green-700 text-green-200 px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors"
          >
            MAKE ANOTHER SELECTION
          </button>
        </div>
      </div>
    );
  }

  if (isDispensing && selectedSection) {
    return (
      <div className="h-full bg-amber-900 text-amber-300 p-3 font-mono text-xs">
        <div className="text-center">
          <p className="text-amber-400 font-bold animate-pulse mb-2">PROCESSING...</p>
          <p className="text-amber-300">DISPENSING {selectedSection.title.toUpperCase()}</p>
          <div className="mt-4">
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSection) {
    return (
      <div className="h-full bg-blue-900 text-blue-300 p-3 font-mono text-xs">
        <div className="text-center">
          <p className="text-blue-400 font-bold mb-1">SELECTION: {selectedSection.buttonCode}</p>
          <p className="text-blue-300 mb-2">{selectedSection.title}</p>
          <p className="text-blue-200 text-xs">PRESS BUTTON TO CONFIRM</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-green-900 text-green-300 p-3 font-mono text-xs">
      <div className="text-center">
        <p className="text-green-400 font-bold mb-2">WELCOME TO CV-MATIC</p>
        <p className="text-green-300 mb-1">Select your career info:</p>
        <div className="text-green-200 text-xs space-y-1">
          <p>A1 - Work Experience</p>
          <p>B2 - Education</p>
          <p>C3 - Skills</p>
          <p>D4 - Contact</p>
          <p>E5 - Projects</p>
        </div>
      </div>
    </div>
  );
};

export default VendingScreen;
