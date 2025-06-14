
import React, { useState } from 'react';
import { X, Package } from 'lucide-react';
import { CVSection } from './VendingMachine';

interface ProductLabelProps {
  section: CVSection;
}

const ProductLabel: React.FC<ProductLabelProps> = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderContent = () => {
    switch (section.id) {
      case 'experience':
        return (
          <div className="space-y-3">
            {section.content.map((job: any, index: number) => (
              <div key={index} className="bg-white/10 rounded-lg p-3">
                <h4 className="font-bold text-red-700 text-base">{job.position}</h4>
                <p className="text-red-600 font-semibold text-sm">{job.company}</p>
                <p className="text-gray-700 text-xs font-mono bg-gray-200 px-2 py-1 rounded mt-1 inline-block">{job.duration}</p>
                <p className="text-gray-800 text-xs mt-2 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-3">
            {section.content.map((edu: any, index: number) => (
              <div key={index} className="bg-white/10 rounded-lg p-3">
                <h4 className="font-bold text-red-700 text-base">{edu.degree}</h4>
                <p className="text-red-600 font-semibold text-sm">{edu.institution}</p>
                <p className="text-gray-700 text-xs font-mono bg-gray-200 px-2 py-1 rounded mt-1 inline-block">{edu.year}</p>
                <p className="text-gray-800 text-xs mt-2 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'skills':
        return (
          <div className="grid grid-cols-1 gap-2">
            {section.content.map((skill: string, index: number) => (
              <div key={index} className="bg-gradient-to-r from-purple-200 to-purple-100 rounded-lg p-2 text-center">
                <span className="text-purple-800 font-mono font-semibold text-sm">{skill}</span>
              </div>
            ))}
          </div>
        );
      
      case 'contact':
        return (
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="space-y-2 text-center">
                <p className="text-red-600 text-sm font-semibold">📧 {section.content.email}</p>
                <p className="text-red-600 text-sm font-semibold">📱 {section.content.phone}</p>
                <p className="text-red-600 text-sm font-semibold">💼 {section.content.linkedin}</p>
                <p className="text-red-600 text-sm font-semibold">🔗 {section.content.github}</p>
              </div>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-3">
            {section.content.map((project: any, index: number) => (
              <div key={index} className="bg-white/10 rounded-lg p-3">
                <h4 className="font-bold text-red-700 text-base">{project.name}</h4>
                <p className="text-red-600 text-xs font-mono bg-gray-200 px-2 py-1 rounded mt-1 inline-block">{project.tech}</p>
                <p className="text-gray-800 text-xs mt-2 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        );
      
      default:
        return <p className="text-gray-600">Content not available</p>;
    }
  };

  if (!isExpanded) {
    return (
      <div 
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <div className="bg-white text-xs px-2 py-1 rounded shadow-lg border border-gray-300 animate-pulse">
          Click to read label
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative max-w-md w-full animate-scale-in">
        <div className={`
          rounded-2xl p-6 mx-auto w-72 h-96 relative 
          shadow-2xl transform transition-all duration-500 overflow-hidden bg-cover bg-center
        `}
        style={{
          backgroundImage: `url(${section.productImage})`,
          boxShadow: `
            0 25px 50px rgba(0,0,0,0.5),
            0 0 0 4px rgba(255,255,255,0.1),
            inset 0 4px 8px rgba(255,255,255,0.2),
            inset 0 -4px 8px rgba(0,0,0,0.3)
          `
        }}>
          
          <div className="bg-gradient-to-b from-white/95 to-gray-100/95 rounded-xl p-4 h-full flex flex-col shadow-inner border-2 border-white/50">
            <div className="text-center border-b-2 border-red-600 pb-3 mb-3">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Package className="text-red-600" size={20} />
                <h3 className="text-lg font-bold text-red-600 font-mono">
                  {section.title.toUpperCase()}
                </h3>
              </div>
              <p className="text-xs text-gray-600 font-mono font-bold">PREMIUM • {section.buttonCode}</p>
            </div>
            
            <div className="flex-1 overflow-y-auto text-sm custom-scrollbar">
              {renderContent()}
            </div>
            
            <div className="text-center mt-3 pt-3 border-t border-gray-300">
              <p className="text-xs text-gray-500 font-mono font-bold">CV-MATIC CORP • EST. 2024</p>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(false)}
            className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductLabel;
