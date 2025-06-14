
import React, { useState } from 'react';
import { X, User, GraduationCap, Code, Mail, Briefcase, Award } from 'lucide-react';
import { CVSection } from './VendingMachine';

interface ProductDetailProps {
  section: CVSection;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    switch (section.id) {
      case 'experience': return <Briefcase className="w-5 h-5" />;
      case 'education': return <GraduationCap className="w-5 h-5" />;
      case 'skills': return <Code className="w-5 h-5" />;
      case 'contact': return <Mail className="w-5 h-5" />;
      case 'projects': return <User className="w-5 h-5" />;
      case 'achievements': return <Award className="w-5 h-5" />;
      default: return <User className="w-5 h-5" />;
    }
  };

  const renderContent = () => {
    switch (section.id) {
      case 'experience':
        return (
          <div className="space-y-4">
            {section.content.map((job: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <h4 className="font-semibold text-gray-900 text-base">{job.position}</h4>
                <p className="text-blue-600 font-medium text-sm">{job.company}</p>
                <p className="text-gray-500 text-xs font-mono bg-gray-100 px-2 py-1 rounded mt-2 inline-block">{job.duration}</p>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-4">
            {section.content.map((edu: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <h4 className="font-semibold text-gray-900 text-base">{edu.degree}</h4>
                <p className="text-blue-600 font-medium text-sm">{edu.institution}</p>
                <p className="text-gray-500 text-xs font-mono bg-gray-100 px-2 py-1 rounded mt-2 inline-block">{edu.year}</p>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'skills':
        return (
          <div className="grid grid-cols-1 gap-3">
            {section.content.map((skill: string, index: number) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 text-center border border-blue-100">
                <span className="text-blue-800 font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        );
      
      case 'contact':
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="space-y-3 text-center">
                <p className="text-gray-700 text-sm flex items-center justify-center gap-2">
                  <span>📧</span> {section.content.email}
                </p>
                <p className="text-gray-700 text-sm flex items-center justify-center gap-2">
                  <span>📱</span> {section.content.phone}
                </p>
                <p className="text-gray-700 text-sm flex items-center justify-center gap-2">
                  <span>💼</span> {section.content.linkedin}
                </p>
                <p className="text-gray-700 text-sm flex items-center justify-center gap-2">
                  <span>🔗</span> {section.content.github}
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-4">
            {section.content.map((project: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <h4 className="font-semibold text-gray-900 text-base">{project.name}</h4>
                <p className="text-blue-600 text-xs font-mono bg-blue-50 px-2 py-1 rounded mt-2 inline-block">{project.tech}</p>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        );

      case 'achievements':
        return (
          <div className="grid grid-cols-1 gap-3">
            {section.content.map((achievement: string, index: number) => (
              <div key={index} className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-3 text-center border border-yellow-100">
                <span className="text-amber-800 font-medium text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        );
      
      default:
        return <p className="text-gray-500">Content not available</p>;
    }
  };

  if (!isExpanded) {
    return (
      <div 
        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-pulse hover:bg-blue-600 transition-colors">
          View Details
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative max-w-lg w-full animate-scale-in">
        <div className={`
          bg-white rounded-3xl p-8 mx-auto w-80 max-h-96 relative 
          shadow-2xl transform transition-all duration-500 overflow-hidden
        `}
        style={{
          boxShadow: `
            0 25px 50px rgba(0,0,0,0.25),
            0 0 0 1px rgba(255,255,255,0.9)
          `
        }}>
          
          <div className="h-full flex flex-col">
            <div className="text-center border-b border-gray-100 pb-4 mb-4">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="text-blue-600">
                  {getIcon()}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {section.title}
                </h3>
              </div>
              <p className="text-xs text-gray-500 font-mono font-medium">
                PORTFOLIO • {section.buttonCode}
              </p>
            </div>
            
            <div className="flex-1 overflow-y-auto text-sm custom-scrollbar">
              {renderContent()}
            </div>
            
            <div className="text-center mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-medium">CV•MATIC • 2024</p>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 bg-gray-100 text-gray-600 rounded-full p-2 hover:bg-gray-200 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
