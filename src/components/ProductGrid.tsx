
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
    <div className="relative h-full p-6">
      
      {/* Product Shelves with realistic spacing */}
      <div className="grid grid-rows-3 gap-6 h-full">
        {/* Row 1 - Products A1, B2, C3 */}
        <div className="flex justify-between items-center px-8">
          {sections.slice(0, 3).map((section) => (
            <div key={section.id} className="relative">
              <div className={`
                w-16 h-20 rounded-lg shadow-xl border-2 border-white/30 overflow-hidden
                ${selectedSection?.id === section.id && machineState === 'dispensing' 
                  ? 'animate-vending-drop opacity-0' 
                  : 'opacity-100'
                }
                transition-all duration-300 bg-cover bg-center transform hover:scale-105
              `}
              style={{
                backgroundImage: `url(${section.productImage})`,
                boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)'
              }}>
                <div className="w-full h-4 bg-black/40 rounded-t-lg flex items-center justify-center">
                  <div className="text-white text-xs font-bold drop-shadow">
                    {section.buttonCode}
                  </div>
                </div>
                {/* Product shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-30"></div>
              </div>
              
              {/* Stacked products behind for depth */}
              <div className={`absolute -z-10 top-1 left-1 w-16 h-20 rounded-lg opacity-70 bg-cover bg-center shadow-lg`}
                   style={{ backgroundImage: `url(${section.productImage})` }}></div>
              <div className={`absolute -z-20 top-2 left-2 w-16 h-20 rounded-lg opacity-40 bg-cover bg-center shadow-md`}
                   style={{ backgroundImage: `url(${section.productImage})` }}></div>
              <div className={`absolute -z-30 top-3 left-3 w-16 h-20 rounded-lg opacity-20 bg-cover bg-center shadow-sm`}
                   style={{ backgroundImage: `url(${section.productImage})` }}></div>
            </div>
          ))}
        </div>
        
        {/* Row 2 - Products D4, E5 */}
        <div className="flex justify-center items-center gap-20">
          {sections.slice(3, 5).map((section) => (
            <div key={section.id} className="relative">
              <div className={`
                w-16 h-20 rounded-lg shadow-xl border-2 border-white/30 overflow-hidden
                ${selectedSection?.id === section.id && machineState === 'dispensing' 
                  ? 'animate-vending-drop opacity-0' 
                  : 'opacity-100'
                }
                transition-all duration-300 bg-cover bg-center transform hover:scale-105
              `}
              style={{
                backgroundImage: `url(${section.productImage})`,
                boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)'
              }}>
                <div className="w-full h-4 bg-black/40 rounded-t-lg flex items-center justify-center">
                  <div className="text-white text-xs font-bold drop-shadow">
                    {section.buttonCode}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-30"></div>
              </div>
              
              <div className={`absolute -z-10 top-1 left-1 w-16 h-20 rounded-lg opacity-70 bg-cover bg-center shadow-lg`}
                   style={{ backgroundImage: `url(${section.productImage})` }}></div>
              <div className={`absolute -z-20 top-2 left-2 w-16 h-20 rounded-lg opacity-40 bg-cover bg-center shadow-md`}
                   style={{ backgroundImage: `url(${section.productImage})` }}></div>
              <div className={`absolute -z-30 top-3 left-3 w-16 h-20 rounded-lg opacity-20 bg-cover bg-center shadow-sm`}
                   style={{ backgroundImage: `url(${section.productImage})` }}></div>
            </div>
          ))}
        </div>
        
        {/* Row 3 - Shelf dividers and structural elements */}
        <div className="flex justify-center items-center">
          <div className="text-gray-600 text-sm font-mono opacity-75">MORE PRODUCTS COMING SOON</div>
        </div>
      </div>

      {/* Dispensing Mechanism - Visible during dispensing */}
      {machineState === 'dispensing' && selectedSection && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {/* Mechanical arm */}
          <div className="w-12 h-3 bg-gray-400 rounded-full animate-pulse mb-3 shadow-lg"></div>
          <div className="w-2 h-16 bg-gray-500 mx-auto mb-2 rounded animate-pulse"></div>
          
          {/* Falling product */}
          <div className={`w-16 h-20 rounded-lg shadow-2xl animate-vending-drop bg-cover bg-center overflow-hidden border-2 border-white/40`}
               style={{ backgroundImage: `url(${selectedSection.productImage})` }}>
            <div className="w-full h-4 bg-black/40 rounded-t-lg flex items-center justify-center">
              <div className="text-white text-xs font-bold drop-shadow">
                {selectedSection.buttonCode}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shelf dividers for realism */}
      <div className="absolute inset-x-0 top-1/3 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
      <div className="absolute inset-x-0 top-2/3 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
    </div>
  );
};

export default ProductGrid;
