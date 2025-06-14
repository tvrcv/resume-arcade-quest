
import React from 'react';
import { X } from 'lucide-react';
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
              <div key={index} className="border-b border-gray-600 pb-3 last:border-b-0">
                <h4 className="font-bold text-yellow-300">{job.position}</h4>
                <p className="text-yellow-200">{job.company}</p>
                <p className="text-gray-300 text-sm">{job.duration}</p>
                <p className="text-gray-300 text-sm mt-1">{job.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-4">
            {section.content.map((edu: any, index: number) => (
              <div key={index} className="border-b border-gray-600 pb-3 last:border-b-0">
                <h4 className="font-bold text-yellow-300">{edu.degree}</h4>
                <p className="text-yellow-200">{edu.institution}</p>
                <p className="text-gray-300 text-sm">{edu.year}</p>
                <p className="text-gray-300 text-sm mt-1">{edu.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'skills':
        return (
          <div className="grid grid-cols-1 gap-2">
            {section.content.map((skill: string, index: number) => (
              <div key={index} className="bg-gray-700 rounded p-2 text-center">
                <span className="text-yellow-300 font-mono">{skill}</span>
              </div>
            ))}
          </div>
        );
      
      case 'contact':
        return (
          <div className="space-y-3">
            <div className="text-center">
              <p className="text-yellow-200">📧 {section.content.email}</p>
              <p className="text-yellow-200">📱 {section.content.phone}</p>
              <p className="text-yellow-200">💼 {section.content.linkedin}</p>
              <p className="text-yellow-200">🔗 {section.content.github}</p>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-4">
            {section.content.map((project: any, index: number) => (
              <div key={index} className="border-b border-gray-600 pb-3 last:border-b-0">
                <h4 className="font-bold text-yellow-300">{project.name}</h4>
                <p className="text-yellow-200 text-sm">{project.tech}</p>
                <p className="text-gray-300 text-sm mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        );
      
      default:
        return <p className="text-gray-300">Content not available</p>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-md w-full">
        {/* Product Can/Package */}
        <div className={`${section.productColor} rounded-lg p-6 mx-auto w-64 h-80 relative shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
          
          {/* Product Label */}
          <div className="bg-white rounded p-4 h-full flex flex-col">
            <div className="text-center border-b-2 border-red-600 pb-2 mb-4">
              <h3 className="text-xl font-bold text-red-600 font-mono">
                {section.title.toUpperCase()}
              </h3>
              <p className="text-xs text-gray-600 font-mono">PREMIUM QUALITY</p>
            </div>
            
            <div className="flex-1 overflow-y-auto text-xs text-gray-800">
              {renderContent()}
            </div>
            
            <div className="text-center mt-4 pt-2 border-t border-gray-300">
              <p className="text-xs text-gray-500 font-mono">EST. 2024 • CV-MATIC CORP</p>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors shadow-lg"
          >
            <X size={16} />
          </button>
        </div>

        {/* Drop zone styling */}
        <div className="text-center mt-4">
          <p className="text-yellow-300 font-mono text-sm">
            Your selection has been dispensed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDispenser;
