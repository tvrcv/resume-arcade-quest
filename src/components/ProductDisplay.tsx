
import React from 'react';
import { CVSection } from './VendingMachine';

interface ProductDisplayProps {
  sections: CVSection[];
  selectedSection: CVSection | null;
  machineState: 'idle' | 'dispensing' | 'collecting';
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  sections,
  selectedSection,
  machineState
}) => {
  return (
    <div className="relative h-full p-4">
      
      {/* Product Shelves - Clean Grid Layout */}
      <div className="grid grid-rows-2 gap-8 h-full">
        
        {/* Top Row - 3 Products */}
        <div className="flex justify-between items-center px-4">
          {sections.slice(0, 3).map((section) => (
            <div key={section.id} className="relative group">
              <div className={`
                w-16 h-20 rounded-xl shadow-lg border border-white/40 overflow-hidden
                ${selectedSection?.id === section.id && machineState === 'dispensing' 
                  ? 'animate-vending-drop opacity-0' 
                  : 'opacity-100'
                }
                transition-all duration-300 bg-cover bg-center transform group-hover:scale-105
              `}
              style={{
                backgroundImage: `url(${section.productImage})`,
                boxShadow: `
                  0 4px 12px rgba(0,0,0,0.15),
                  inset 0 1px 2px rgba(255,255,255,0.2)
                `
              }}>
                {/* Product label */}
                <div className="w-full h-4 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-white text-xs font-mono font-bold">
                    {section.buttonCode}
                  </div>
                </div>
                
                {/* Premium shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Depth stack - Subtle */}
              <div className={`absolute -z-10 top-0.5 left-0.5 w-16 h-20 rounded-xl opacity-60 bg-cover bg-center`}
                   style={{ 
                     backgroundImage: `url(${section.productImage})`,
                     filter: 'brightness(0.8)'
                   }}></div>
              <div className={`absolute -z-20 top-1 left-1 w-16 h-20 rounded-xl opacity-40 bg-cover bg-center`}
                   style={{ 
                     backgroundImage: `url(${section.productImage})`,
                     filter: 'brightness(0.6)'
                   }}></div>
            </div>
          ))}
        </div>
        
        {/* Bottom Row - 3 Products */}
        <div className="flex justify-between items-center px-4">
          {sections.slice(3, 6).map((section) => (
            <div key={section.id} className="relative group">
              <div className={`
                w-16 h-20 rounded-xl shadow-lg border border-white/40 overflow-hidden
                ${selectedSection?.id === section.id && machineState === 'dispensing' 
                  ? 'animate-vending-drop opacity-0' 
                  : 'opacity-100'
                }
                transition-all duration-300 bg-cover bg-center transform group-hover:scale-105
              `}
              style={{
                backgroundImage: `url(${section.productImage})`,
                boxShadow: `
                  0 4px 12px rgba(0,0,0,0.15),
                  inset 0 1px 2px rgba(255,255,255,0.2)
                `
              }}>
                <div className="w-full h-4 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-white text-xs font-mono font-bold">
                    {section.buttonCode}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className={`absolute -z-10 top-0.5 left-0.5 w-16 h-20 rounded-xl opacity-60 bg-cover bg-center`}
                   style={{ 
                     backgroundImage: `url(${section.productImage})`,
                     filter: 'brightness(0.8)'
                   }}></div>
              <div className={`absolute -z-20 top-1 left-1 w-16 h-20 rounded-xl opacity-40 bg-cover bg-center`}
                   style={{ 
                     backgroundImage: `url(${section.productImage})`,
                     filter: 'brightness(0.6)'
                   }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Dispensing Animation - Falling Product */}
      {machineState === 'dispensing' && selectedSection && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {/* Dispensing mechanism */}
          <div className="w-8 h-2 bg-gray-400 rounded-full animate-pulse mb-2 mx-auto shadow-sm"></div>
          
          {/* Falling product */}
          <div className={`w-16 h-20 rounded-xl shadow-2xl animate-vending-drop bg-cover bg-center overflow-hidden border border-white/50`}
               style={{ backgroundImage: `url(${selectedSection.productImage})` }}>
            <div className="w-full h-4 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <div className="text-white text-xs font-mono font-bold">
                {selectedSection.buttonCode}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shelf dividers - Subtle */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
    </div>
  );
};

export default ProductDisplay;
