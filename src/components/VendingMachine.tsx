
import React, { useState } from 'react';
import VendingScreen from './VendingScreen';
import ProductDisplay from './ProductDisplay';
import CollectionTray from './CollectionTray';

export interface CVSection {
  id: string;
  title: string;
  buttonCode: string;
  productType: 'soda' | 'chips' | 'candy' | 'coffee' | 'sandwich';
  productColor: string;
  productImage: string;
  content: any;
}

const VendingMachine: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<CVSection | null>(null);
  const [machineState, setMachineState] = useState<'idle' | 'dispensing' | 'collecting'>('idle');
  const [dispensedProduct, setDispensedProduct] = useState<CVSection | null>(null);

  const cvSections: CVSection[] = [
    {
      id: 'experience',
      title: 'Work Experience',
      buttonCode: 'A1',
      productType: 'soda',
      productColor: 'bg-blue-600',
      productImage: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400',
      content: [
        {
          company: "Apple Inc.",
          position: "Senior iOS Developer",
          duration: "2022 - Present",
          description: "Leading development of cutting-edge mobile applications with focus on user experience and performance optimization"
        },
        {
          company: "Meta",
          position: "Frontend Engineer", 
          duration: "2020 - 2022",
          description: "Built scalable React applications serving millions of users worldwide"
        }
      ]
    },
    {
      id: 'education',
      title: 'Education',
      buttonCode: 'B2',
      productType: 'chips',
      productColor: 'bg-green-600',
      productImage: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400',
      content: [
        {
          institution: "Stanford University",
          degree: "Computer Science",
          year: "2019",
          description: "Master's degree in Computer Science with focus on Human-Computer Interaction"
        }
      ]
    },
    {
      id: 'skills',
      title: 'Technical Skills',
      buttonCode: 'C3',
      productType: 'candy',
      productColor: 'bg-purple-600',
      productImage: 'https://images.unsplash.com/photo-1571506165871-ee72a35bce14?w=400',
      content: [
        "Swift & Objective-C",
        "React & TypeScript", 
        "Python & Machine Learning",
        "UI/UX Design",
        "System Architecture"
      ]
    },
    {
      id: 'contact',
      title: 'Contact Info',
      buttonCode: 'D4',
      productType: 'coffee',
      productColor: 'bg-amber-600',
      productImage: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
      content: {
        email: "hello@johndoe.com",
        phone: "+1 (555) 123-4567",
        linkedin: "linkedin.com/in/johndoe",
        github: "github.com/johndoe"
      }
    },
    {
      id: 'projects',
      title: 'Featured Projects',
      buttonCode: 'E5',
      productType: 'sandwich',
      productColor: 'bg-red-600',
      productImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
      content: [
        {
          name: "AI-Powered Mobile App",
          tech: "Swift, CoreML, ARKit",
          description: "Revolutionary mobile experience combining artificial intelligence with augmented reality"
        },
        {
          name: "Enterprise Dashboard",
          tech: "React, TypeScript, D3.js",
          description: "Real-time analytics platform processing millions of data points"
        }
      ]
    },
    {
      id: 'achievements',
      title: 'Achievements',
      buttonCode: 'F6',
      productType: 'soda',
      productColor: 'bg-indigo-600',
      productImage: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
      content: [
        "Apple Design Award Winner 2023",
        "Tech Innovation Award",
        "Published 15+ Research Papers",
        "Speaker at WWDC 2023"
      ]
    }
  ];

  const handleProductSelect = async (section: CVSection) => {
    console.log('Product selected:', section.buttonCode);
    setSelectedSection(section);
    setMachineState('dispensing');
    
    // Simulate dispensing process
    setTimeout(() => {
      setDispensedProduct(section);
      setMachineState('collecting');
      console.log('Product dispensed:', section.buttonCode);
    }, 3000);
  };

  const handleProductCollected = () => {
    console.log('Product collected');
    setSelectedSection(null);
    setDispensedProduct(null);
    setMachineState('idle');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      
      {/* Apple-inspired Vending Machine */}
      <div className="relative">
        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden"
             style={{
               width: '480px',
               height: '780px',
               boxShadow: `
                 0 25px 50px rgba(0,0,0,0.08),
                 0 0 0 1px rgba(255,255,255,0.9),
                 inset 0 1px 0 rgba(255,255,255,0.9)
               `
             }}>
          
          {/* Top Brand Section - Minimal Apple Style */}
          <div className="relative p-6 bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
            <div className="text-center">
              <h1 className="text-2xl font-light text-gray-900 tracking-wide">
                CV•MATIC
              </h1>
              <p className="text-xs text-gray-500 font-medium tracking-wider uppercase mt-1">
                Professional Portfolio
              </p>
            </div>
          </div>

          {/* Interactive Screen - Main Interface */}
          <div className="mx-6 mt-6 mb-4">
            <div className="bg-black rounded-2xl border border-gray-200 h-48 overflow-hidden relative"
                 style={{
                   boxShadow: `
                     inset 0 2px 8px rgba(0,0,0,0.15),
                     0 1px 2px rgba(0,0,0,0.05)
                   `
                 }}>
              <VendingScreen 
                sections={cvSections}
                selectedSection={selectedSection}
                machineState={machineState}
                onProductSelect={handleProductSelect}
              />
            </div>
          </div>

          {/* Transparent Product Display - Crystal Clear Glass */}
          <div className="mx-6 mb-4">
            <div className="relative bg-gradient-to-b from-white/95 to-gray-50/95 border border-gray-200 rounded-2xl h-64 overflow-hidden"
                 style={{
                   boxShadow: `
                     inset 0 1px 3px rgba(0,0,0,0.1),
                     0 1px 2px rgba(0,0,0,0.05)
                   `,
                   backdropFilter: 'blur(20px)',
                   WebkitBackdropFilter: 'blur(20px)'
                 }}>
              
              {/* Glass reflection effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute top-2 left-2 w-12 h-24 bg-gradient-to-br from-white/30 to-transparent rounded-lg transform rotate-12"></div>
              
              <ProductDisplay 
                sections={cvSections}
                selectedSection={selectedSection}
                machineState={machineState}
              />
            </div>
          </div>

          {/* Collection Tray - Seamless Integration */}
          <div className="mx-6 mb-6">
            <CollectionTray 
              dispensedProduct={dispensedProduct}
              machineState={machineState}
              onProductCollected={handleProductCollected}
            />
          </div>

        </div>

        {/* Subtle floor shadow */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-96 h-8 bg-black/5 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default VendingMachine;
