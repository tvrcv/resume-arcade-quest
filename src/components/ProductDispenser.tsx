
import React from 'react';
import { X, Package } from 'lucide-react';
import { CVSection } from './VendingMachine';

interface ProductDispenserProps {
  section: CVSection;
  onClose: () => void;
}

const ProductDispenser: React.FC<ProductDispenserProps> = ({
  section,
  onClose
}) => {
  const renderContent = () => {
    switch (section.id) {
      case 'experience':
        return (
          <div className="space-y-4">
            {section.content.map((job: any, index: number) => (
              <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                <h4 className="font-bold text-yellow-300 text-lg">{job.position}</h4>
                <p className="text-yellow-200 font-semibold">{job.company}</p>
                <p className="text-gray-300 text-sm font-mono bg-black/20 px-2 py-1 rounded mt-1 inline-block">{job.duration}</p>
                <p className="text-gray-200 text-sm mt-2 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-4">
            {section.content.map((edu: any, index: number) => (
              <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                <h4 className="font-bold text-yellow-300 text-lg">{edu.degree}</h4>
                <p className="text-yellow-200 font-semibold">{edu.institution}</p>
                <p className="text-gray-300 text-sm font-mono bg-black/20 px-2 py-1 rounded mt-1 inline-block">{edu.year}</p>
                <p className="text-gray-200 text-sm mt-2 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'skills':
        return (
          <div className="grid grid-cols-1 gap-3">
            {section.content.map((skill: string, index: number) => (
              <div key={index} className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-lg p-3 text-center border border-purple-500/30">
                <span className="text-yellow-300 font-mono font-semibold text-lg">{skill}</span>
              </div>
            ))}
          </div>
        );
      
      case 'contact':
        return (
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="space-y-3 text-center">
                <p className="text-yellow-200 text-lg font-semibold">📧 {section.content.email}</p>
                <p className="text-yellow-200 text-lg font-semibold">📱 {section.content.phone}</p>
                <p className="text-yellow-200 text-lg font-semibold">💼 {section.content.linkedin}</p>
                <p className="text-yellow-200 text-lg font-semibold">🔗 {section.content.github}</p>
              </div>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-4">
            {section.content.map((project: any, index: number) => (
              <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                <h4 className="font-bold text-yellow-300 text-lg">{project.name}</h4>
                <p className="text-yellow-200 text-sm font-mono bg-black/20 px-2 py-1 rounded mt-1 inline-block">{project.tech}</p>
                <p className="text-gray-200 text-sm mt-2 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        );
      
      default:
        return <p className="text-gray-300">Content not available</p>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative max-w-lg w-full animate-scale-in">
        {/* Product Can with enhanced 3D effect */}
        <div className={`
          ${section.productColor} rounded-2xl p-8 mx-auto w-80 h-96 relative 
          shadow-2xl transform transition-all duration-500
          hover:rotate-1 hover:scale-105
        `}
        style={{
          boxShadow: `
            0 25px 50px rgba(0,0,0,0.5),
            0 0 0 4px rgba(255,255,255,0.1),
            inset 0 4px 8px rgba(255,255,255,0.2),
            inset 0 -4px 8px rgba(0,0,0,0.3)
          `
        }}>
          
          {/* Product Label with premium design */}
          <div className="bg-gradient-to-b from-white to-gray-100 rounded-xl p-6 h-full flex flex-col shadow-inner border-2 border-white/50">
            <div className="text-center border-b-2 border-red-600 pb-4 mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Package className="text-red-600" size={24} />
                <h3 className="text-2xl font-bold text-red-600 font-mono">
                  {section.title.toUpperCase()}
                </h3>
              </div>
              <p className="text-xs text-gray-600 font-mono font-bold">PREMIUM QUALITY • {section.buttonCode}</p>
            </div>
            
            <div className="flex-1 overflow-y-auto text-sm text-gray-800 custom-scrollbar">
              {renderContent()}
            </div>
            
            <div className="text-center mt-4 pt-4 border-t-2 border-gray-300">
              <p className="text-xs text-gray-500 font-mono font-bold">EST. 2024 • CV-MATIC CORP</p>
              <div className="flex justify-center mt-2">
                <div className="w-16 h-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Close button with better positioning */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full p-3 hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110"
            style={{
              boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)'
            }}
          >
            <X size={20} />
          </button>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shine pointer-events-none rounded-2xl"></div>
        </div>

        {/* Enhanced drop zone styling */}
        <div className="text-center mt-6">
          <p className="text-yellow-300 font-mono text-lg font-bold drop-shadow-lg">
            🎉 Your selection has been dispensed!
          </p>
          <p className="text-gray-300 font-mono text-sm mt-2">
            Click the X to make another selection
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDispenser;
