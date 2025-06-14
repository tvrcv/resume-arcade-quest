
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
          {/* Row 1 */}
          <div className="flex justify-between items-center px-4">
            {sections.slice(0, 3).map((section) => (
              <div key={section.id} className="relative">
                <div className={`
                  w-12 h-16 ${section.productColor} rounded-lg shadow-lg border-2 border-white/20
                  ${selectedSection?.id === section.id && machineState === 'dispensing' 
                    ? 'animate-vending-drop opacity-0' 
                    : 'opacity-100'
                  }
                  transition-all duration-300
                `}>
                  <div className="w-full h-3 bg-white/30 rounded-t-lg"></div>
                  <div className="text-white text-xs text-center mt-1 font-bold">
                    {section.buttonCode}
                  </div>
                </div>
                {/* Show multiple products stacked behind */}
                <div className={`absolute -z-10 top-1 left-1 w-12 h-16 ${section.productColor} rounded-lg opacity-60`}></div>
                <div className={`absolute -z-20 top-2 left-2 w-12 h-16 ${section.productColor} rounded-lg opacity-30`}></div>
              </div>
            ))}
          </div>
          
          {/* Row 2 */}
          <div className="flex justify-between items-center px-4">
            {sections.slice(3, 5).map((section) => (
              <div key={section.id} className="relative">
                <div className={`
                  w-12 h-16 ${section.productColor} rounded-lg shadow-lg border-2 border-white/20
                  ${selectedSection?.id === section.id && machineState === 'dispensing' 
                    ? 'animate-vending-drop opacity-0' 
                    : 'opacity-100'
                  }
                  transition-all duration-300
                `}>
                  <div className="w-full h-3 bg-white/30 rounded-t-lg"></div>
                  <div className="text-white text-xs text-center mt-1 font-bold">
                    {section.buttonCode}
                  </div>
                </div>
                <div className={`absolute -z-10 top-1 left-1 w-12 h-16 ${section.productColor} rounded-lg opacity-60`}></div>
                <div className={`absolute -z-20 top-2 left-2 w-12 h-16 ${section.productColor} rounded-lg opacity-30`}></div>
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
            <div className={`w-12 h-16 ${selectedSection.productColor} rounded-lg shadow-lg animate-vending-drop`}>
              <div className="w-full h-3 bg-white/30 rounded-t-lg"></div>
              <div className="text-white text-xs text-center mt-1 font-bold">
                {selectedSection.buttonCode}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
