
import React from 'react';
import { CVSection } from './VendingMachine';
import { User, GraduationCap, Code, Mail, Briefcase, Award } from 'lucide-react';

interface CVDetailsPanelProps {
  sections: CVSection[];
}

const CVDetailsPanel: React.FC<CVDetailsPanelProps> = ({ sections }) => {
  const getIcon = (sectionId: string) => {
    switch (sectionId) {
      case 'experience': return <Briefcase className="w-5 h-5" />;
      case 'education': return <GraduationCap className="w-5 h-5" />;
      case 'skills': return <Code className="w-5 h-5" />;
      case 'contact': return <Mail className="w-5 h-5" />;
      case 'projects': return <User className="w-5 h-5" />;
      case 'achievements': return <Award className="w-5 h-5" />;
      default: return <User className="w-5 h-5" />;
    }
  };

  const renderSectionContent = (section: CVSection) => {
    switch (section.id) {
      case 'experience':
        return (
          <div className="space-y-3">
            {section.content.map((job: any, index: number) => (
              <div key={index} className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <h4 className="font-semibold text-blue-900 text-sm">{job.position}</h4>
                <p className="text-blue-700 font-medium text-xs">{job.company}</p>
                <p className="text-gray-600 text-xs font-mono bg-white px-2 py-1 rounded mt-1 inline-block">{job.duration}</p>
                <p className="text-gray-700 text-xs mt-2 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-3">
            {section.content.map((edu: any, index: number) => (
              <div key={index} className="bg-green-50 rounded-lg p-3 border border-green-100">
                <h4 className="font-semibold text-green-900 text-sm">{edu.degree}</h4>
                <p className="text-green-700 font-medium text-xs">{edu.institution}</p>
                <p className="text-gray-600 text-xs font-mono bg-white px-2 py-1 rounded mt-1 inline-block">{edu.year}</p>
                <p className="text-gray-700 text-xs mt-2 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'skills':
        return (
          <div className="grid grid-cols-1 gap-2">
            {section.content.map((skill: string, index: number) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-2 text-center border border-purple-100">
                <span className="text-purple-800 font-medium text-xs">{skill}</span>
              </div>
            ))}
          </div>
        );
      
      case 'contact':
        return (
          <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
            <div className="space-y-2">
              <p className="text-gray-700 text-xs flex items-center gap-2">
                <span>📧</span> {section.content.email}
              </p>
              <p className="text-gray-700 text-xs flex items-center gap-2">
                <span>📱</span> {section.content.phone}
              </p>
              <p className="text-gray-700 text-xs flex items-center gap-2">
                <span>💼</span> {section.content.linkedin}
              </p>
              <p className="text-gray-700 text-xs flex items-center gap-2">
                <span>🔗</span> {section.content.github}
              </p>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-3">
            {section.content.map((project: any, index: number) => (
              <div key={index} className="bg-red-50 rounded-lg p-3 border border-red-100">
                <h4 className="font-semibold text-red-900 text-sm">{project.name}</h4>
                <p className="text-red-700 text-xs font-mono bg-white px-2 py-1 rounded mt-1 inline-block">{project.tech}</p>
                <p className="text-gray-700 text-xs mt-2 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        );

      case 'achievements':
        return (
          <div className="grid grid-cols-1 gap-2">
            {section.content.map((achievement: string, index: number) => (
              <div key={index} className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-2 text-center border border-indigo-100">
                <span className="text-indigo-800 font-medium text-xs">{achievement}</span>
              </div>
            ))}
          </div>
        );
      
      default:
        return <p className="text-gray-500 text-xs">Content not available</p>;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 w-96 max-h-[700px] overflow-hidden">
      <div className="text-center mb-6 border-b border-gray-100 pb-4">
        <h2 className="text-xl font-semibold text-gray-900">Portfolio Details</h2>
        <p className="text-xs text-gray-500 mt-1">Complete CV Information</p>
      </div>
      
      <div className="space-y-6 overflow-y-auto max-h-[600px] custom-scrollbar pr-2">
        {sections.map((section) => (
          <div key={section.id} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-blue-600">
                {getIcon(section.id)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{section.title}</h3>
                <p className="text-xs text-gray-500 font-mono">{section.buttonCode}</p>
              </div>
            </div>
            
            {renderSectionContent(section)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVDetailsPanel;
