
import React from 'react';
import { CVSection } from './VendingMachine';
import ProductDetail from './ProductDetail';

interface CollectionTrayProps {
  dispensedProduct: CVSection | null;
  machineState: 'idle' | 'dispensing' | 'collecting';
  onProductCollected: () => void;
}

const CollectionTray: React.FC<CollectionTrayProps> = ({
  dispensedProduct,
  machineState,
  onProductCollected
}) => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 rounded-2xl h-20 shadow-inner relative overflow-hidden">
      <div className="absolute inset-2 bg-gradient-to-b from-white to-gray-50 rounded-xl flex items-center justify-center">
        
        {machineState === 'collecting' && dispensedProduct ? (
          <div className="relative animate-scale-in">
            <button
              onClick={onProductCollected}
              className={`
                w-14 h-16 rounded-lg shadow-lg border border-gray-200
                transform transition-all duration-200 hover:scale-110 hover:shadow-xl
                cursor-pointer relative overflow-hidden bg-cover bg-center
                hover:border-blue-300
              `}
              style={{
                backgroundImage: `url(${dispensedProduct.productImage})`
              }}
            >
              <div className="w-full h-3 bg-black/50 backdrop-blur-sm rounded-t-lg flex items-center justify-center">
                <div className="text-white text-xs font-mono font-bold">
                  {dispensedProduct.buttonCode}
                </div>
              </div>
              <div className="absolute bottom-1 left-0 right-0 text-white text-xs text-center font-medium bg-black/50 backdrop-blur-sm py-0.5">
                TAP TO VIEW
              </div>
              
              {/* Premium shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <ProductDetail section={dispensedProduct} />
          </div>
        ) : (
          <div className="text-gray-400 text-xs font-medium text-center">
            {machineState === 'dispensing' ? (
              <div className="animate-pulse flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                <span>Product arriving...</span>
              </div>
            ) : (
              <div>
                <div className="text-gray-500 font-medium">Collection Tray</div>
                <div className="text-xs text-gray-400 mt-0.5">Select from screen above</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionTray;
