
import React from 'react';
import { CVSection } from './VendingMachine';
import ProductLabel from './ProductLabel';

interface CollectionShelfProps {
  dispensedProduct: CVSection | null;
  machineState: 'idle' | 'dispensing' | 'collecting';
  onProductCollected: () => void;
}

const CollectionShelf: React.FC<CollectionShelfProps> = ({
  dispensedProduct,
  machineState,
  onProductCollected
}) => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-6 border-gray-600 rounded-xl h-24 shadow-inner relative overflow-hidden">
      <div className="absolute inset-2 bg-gradient-to-b from-gray-900 to-black rounded-lg flex items-center justify-center">
        
        {/* Collection Door */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-b-lg"></div>
        
        {machineState === 'collecting' && dispensedProduct ? (
          <div className="relative animate-scale-in">
            <button
              onClick={onProductCollected}
              className={`
                w-16 h-20 ${dispensedProduct.productColor} rounded-lg shadow-xl
                transform transition-all duration-200 hover:scale-110 hover:shadow-2xl
                cursor-pointer border-2 border-white/30 hover:border-white/50
                relative overflow-hidden
              `}
            >
              <div className="w-full h-4 bg-white/40 rounded-t-lg"></div>
              <div className="text-white text-xs text-center mt-1 font-bold">
                {dispensedProduct.buttonCode}
              </div>
              <div className="text-white text-xs text-center font-mono">
                CLICK ME
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shine"></div>
            </button>
            
            {/* Product opened view */}
            <ProductLabel section={dispensedProduct} />
          </div>
        ) : (
          <div className="text-gray-500 text-xs font-mono text-center">
            {machineState === 'dispensing' ? (
              <div className="animate-pulse">PRODUCT INCOMING...</div>
            ) : (
              <>
                <div>COLLECTION SHELF</div>
                <div className="text-xs mt-1">Products will appear here</div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionShelf;
