
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
      <div className="h-full bg-gradient-to-b from-green-800 to-green-900 text-green-300 p-4 font-mono text-sm vending-screen">
        <div className="text-center mb-3">
          <p className="text-green-400 font-bold text-lg animate-pulse">✓ TRANSACTION COMPLETE</p>
          <p className="text-green-300 font-semibold">{selectedSection.title}</p>
          <p className="text-green-200 text-xs mt-1">CODE: {selectedSection.buttonCode}</p>
        </div>
        <div className="text-center">
          <button 
            onClick={onReset}
            className="bg-green-700 text-green-200 px-4 py-2 rounded font-bold text-xs hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            ▶ NEW SELECTION
          </button>
        </div>
      </div>
    );
  }

  if (isDispensing && selectedSection) {
    return (
      <div className="h-full bg-gradient-to-b from-amber-800 to-amber-900 text-amber-300 p-4 font-mono text-sm vending-screen">
        <div className="text-center">
          <p className="text-amber-400 font-bold animate-pulse mb-2 text-lg">⚡ PROCESSING...</p>
          <p className="text-amber-300 font-semibold">DISPENSING {selectedSection.title.toUpperCase()}</p>
          <p className="text-amber-200 text-xs">CODE: {selectedSection.buttonCode}</p>
          <div className="mt-6">
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            <p className="text-amber-300 text-xs mt-4 animate-pulse">Please wait...</p>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSection) {
    return (
      <div className="h-full bg-gradient-to-b from-blue-800 to-blue-900 text-blue-300 p-4 font-mono text-sm vending-screen">
        <div className="text-center">
          <p className="text-blue-400 font-bold mb-2">📋 SELECTION: {selectedSection.buttonCode}</p>
          <p className="text-blue-300 mb-2 font-semibold">{selectedSection.title}</p>
          <div className="border border-blue-500 rounded p-2 mb-3 bg-blue-900/50">
            <p className="text-blue-200 text-xs leading-relaxed">
              Premium quality career information. 
              Ready for immediate dispensing.
            </p>
          </div>
          <p className="text-blue-200 text-xs animate-pulse">
            ► PRESS BUTTON AGAIN TO CONFIRM ◄
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gradient-to-b from-green-800 to-green-900 text-green-300 p-4 font-mono text-sm vending-screen">
      <div className="text-center">
        <p className="text-green-400 font-bold mb-3 text-lg animate-pulse">
          🌟 WELCOME TO CV-MATIC 🌟
        </p>
        <p className="text-green-300 mb-2 font-semibold">Select your career information:</p>
        <div className="text-green-200 text-xs space-y-1 leading-relaxed">
          <div className="grid grid-cols-1 gap-1 mt-3">
            <p className="border border-green-600 rounded px-2 py-1 bg-green-900/30">A1 - Work Experience</p>
            <p className="border border-green-600 rounded px-2 py-1 bg-green-900/30">B2 - Education</p>
            <p className="border border-green-600 rounded px-2 py-1 bg-green-900/30">C3 - Technical Skills</p>
            <p className="border border-green-600 rounded px-2 py-1 bg-green-900/30">D4 - Contact Info</p>
            <p className="border border-green-600 rounded px-2 py-1 bg-green-900/30">E5 - Projects</p>
          </div>
        </div>
        <p className="text-green-400 text-xs mt-3 animate-pulse">
          ✨ Premium quality guaranteed ✨
        </p>
      </div>
    </div>
  );
};

export default VendingScreen;
