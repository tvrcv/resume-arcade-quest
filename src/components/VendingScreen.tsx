
import React from 'react';
import { CVSection } from './VendingMachine';
import { Play, CheckCircle } from 'lucide-react';

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
      <div className="h-full bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6 flex flex-col justify-center items-center">
        <div className="text-center">
          <Play className="w-12 h-12 mx-auto mb-4 animate-pulse" />
          <p className="text-white/90 font-medium text-lg mb-2">Preparing Selection</p>
          <p className="text-white/70 text-sm mb-4">{selectedSection.title}</p>
          <p className="text-xs text-white/60 font-mono">{selectedSection.buttonCode}</p>
          
          <div className="mt-6">
            <div className="flex justify-center space-x-1 mb-4">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (machineState === 'collecting') {
    return (
      <div className="h-full bg-gradient-to-b from-green-500 to-green-700 text-white p-6 flex flex-col justify-center items-center">
        <div className="text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-4" />
          <p className="text-white/90 font-medium text-lg mb-2">Ready for Collection</p>
          <p className="text-white/70 text-sm mb-4">Your {selectedSection?.title} awaits</p>
          <div className="mt-4 animate-pulse">
            <p className="text-white/80 text-sm">↓ Check collection tray below ↓</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gradient-to-b from-gray-900 to-black text-white p-4 overflow-y-auto">
      <div className="text-center mb-4">
        <p className="text-white/90 font-medium text-lg mb-2">
          Professional Portfolio
        </p>
        <p className="text-white/60 text-sm">Select to explore</p>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onProductSelect(section)}
            className="group relative bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-3 text-center hover:from-gray-700 hover:to-gray-800 transition-all duration-200 transform hover:scale-105"
          >
            {/* Product preview */}
            <div className="w-8 h-8 mx-auto mb-2 rounded overflow-hidden border border-gray-600">
              <img 
                src={section.productImage} 
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product code */}
            <div className="text-blue-400 font-mono text-sm font-bold mb-1">
              {section.buttonCode}
            </div>
            
            {/* Product title */}
            <div className="text-white/80 text-xs leading-tight">
              {section.title}
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VendingScreen;
