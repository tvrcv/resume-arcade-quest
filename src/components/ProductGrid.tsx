
import React from 'react';
import { CVSection } from './VendingMachine';

interface ProductGridProps {
  sections: CVSection[];
  selectedSection: CVSection | null;
  machineState: 'idle' | 'dispensing' | 'collecting';
}

const ProductGrid: React.FC<ProductGridProps> = ({
  sections,
  selectedSection,
  machineState
}) => {
  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-900 border-8 border-gray-600 rounded-xl h-48 shadow-inner relative overflow-hidden">
      <div className="absolute inset-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg">
        
        {/* Product Shelves */}
        <div className="grid grid-rows-3 gap-1 h-full p-3">
          {/* Row 1 - Products A1, B2, C3 */}
          <div className="flex justify-between items-center px-4">
            {sections.slice(0, 3).map((section) => (
              <div key={section.id} className="relative">
                <div className={`
                  w-12 h-16 rounded-lg shadow-lg border-2 border-white/20 overflow-hidden
                  ${selectedSection?.id === section.id && machineState === 'dispensing' 
                    ? 'animate-vending-drop opacity-0' 
                    : 'opacity-100'
                  }
                  transition-all duration-300 bg-cover bg-center
                `}
                style={{
                  backgroundImage: `url(${section.productImage})`
                }}>
                  <div className="w-full h-3 bg-black/30 rounded-t-lg flex items-center justify-center">
                    <div className="text-white text-xs font-bold">
                      {section.buttonCode}
                    </div>
                  </div>
                </div>
                {/* Show multiple products stacked behind */}
                <div className={`absolute -z-10 top-1 left-1 w-12 h-16 rounded-lg opacity-60 bg-cover bg-center`}
                     style={{ backgroundImage: `url(${section.productImage})` }}></div>
                <div className={`absolute -z-20 top-2 left-2 w-12 h-16 rounded-lg opacity-30 bg-cover bg-center`}
                     style={{ backgroundImage: `url(${section.productImage})` }}></div>
              </div>
            ))}
          </div>
          
          {/* Row 2 - Products D4, E5 */}
          <div className="flex justify-center items-center gap-16">
            {sections.slice(3, 5).map((section) => (
              <div key={section.id} className="relative">
                <div className={`
                  w-12 h-16 rounded-lg shadow-lg border-2 border-white/20 overflow-hidden
                  ${selectedSection?.id === section.id && machineState === 'dispensing' 
                    ? 'animate-vending-drop opacity-0' 
                    : 'opacity-100'
                  }
                  transition-all duration-300 bg-cover bg-center
                `}
                style={{
                  backgroundImage: `url(${section.productImage})`
                }}>
                  <div className="w-full h-3 bg-black/30 rounded-t-lg flex items-center justify-center">
                    <div className="text-white text-xs font-bold">
                      {section.buttonCode}
                    </div>
                  </div>
                </div>
                <div className={`absolute -z-10 top-1 left-1 w-12 h-16 rounded-lg opacity-60 bg-cover bg-center`}
                     style={{ backgroundImage: `url(${section.productImage})` }}></div>
                <div className={`absolute -z-20 top-2 left-2 w-12 h-16 rounded-lg opacity-30 bg-cover bg-center`}
                     style={{ backgroundImage: `url(${section.productImage})` }}></div>
              </div>
            ))}
          </div>
          
          {/* Row 3 - Empty for visual balance */}
          <div className="flex justify-center items-center">
            <div className="text-gray-500 text-xs font-mono">MORE PRODUCTS COMING SOON</div>
          </div>
        </div>

        {/* Dispensing Mechanism - Visible during dispensing */}
        {machineState === 'dispensing' && selectedSection && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-2 bg-gray-400 rounded animate-pulse mb-2"></div>
            <div className={`w-12 h-16 rounded-lg shadow-lg animate-vending-drop bg-cover bg-center overflow-hidden`}
                 style={{ backgroundImage: `url(${selectedSection.productImage})` }}>
              <div className="w-full h-3 bg-black/30 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-xs font-bold">
                  {selectedSection.buttonCode}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
