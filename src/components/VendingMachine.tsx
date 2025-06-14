
import React, { useState } from 'react';
import VendingScreen from './VendingScreen';
import VendingButtons from './VendingButtons';
import ProductDispenser from './ProductDispenser';

export interface CVSection {
  id: string;
  title: string;
  buttonCode: string;
  productType: 'soda' | 'chips' | 'candy' | 'coffee' | 'sandwich';
  productColor: string;
  content: any;
}

const VendingMachine: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<CVSection | null>(null);
  const [isDispensing, setIsDispensing] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  // Your CV data here - customize this!
  const cvSections: CVSection[] = [
    {
      id: 'experience',
      title: 'Work Experience',
      buttonCode: 'A1',
      productType: 'soda',
      productColor: 'bg-red-600',
      content: [
        {
          company: "TechCorp Inc.",
          position: "Senior Developer",
          duration: "2022 - Present",
          description: "Led development of web applications"
        },
        {
          company: "StartupXYZ",
          position: "Frontend Developer", 
          duration: "2020 - 2022",
          description: "Built responsive user interfaces"
        }
      ]
    },
    {
      id: 'education',
      title: 'Education',
      buttonCode: 'B2',
      productType: 'chips',
      productColor: 'bg-yellow-500',
      content: [
        {
          institution: "University of Technology",
          degree: "Computer Science",
          year: "2019",
          description: "Bachelor's degree with honors"
        }
      ]
    },
    {
      id: 'skills',
      title: 'Technical Skills',
      buttonCode: 'C3',
      productType: 'candy',
      productColor: 'bg-purple-600',
      content: [
        "JavaScript/TypeScript",
        "React & Vue.js",
        "Node.js & Python",
        "SQL & MongoDB",
        "AWS & Docker"
      ]
    },
    {
      id: 'contact',
      title: 'Contact Info',
      buttonCode: 'D4',
      productType: 'coffee',
      productColor: 'bg-amber-800',
      content: {
        email: "your.email@example.com",
        phone: "+1 (555) 123-4567",
        linkedin: "linkedin.com/in/yourname",
        github: "github.com/yourname"
      }
    },
    {
      id: 'projects',
      title: 'Projects',
      buttonCode: 'E5',
      productType: 'sandwich',
      productColor: 'bg-green-600',
      content: [
        {
          name: "E-commerce Platform",
          tech: "React, Node.js, MongoDB",
          description: "Full-stack web application"
        },
        {
          name: "Mobile Weather App",
          tech: "React Native, API Integration",
          description: "Cross-platform mobile application"
        }
      ]
    }
  ];

  const handleProductSelect = async (section: CVSection) => {
    setSelectedSection(section);
    setIsDispensing(true);
    
    // Simulate vending machine delay
    setTimeout(() => {
      setIsDispensing(false);
      setShowProduct(true);
    }, 2000);
  };

  const resetMachine = () => {
    setSelectedSection(null);
    setShowProduct(false);
    setIsDispensing(false);
  };

  return (
    <div className="relative">
      {/* Main Vending Machine */}
      <div className="bg-gradient-to-b from-orange-600 to-red-700 rounded-lg shadow-2xl p-8 w-96 h-[600px] relative border-8 border-orange-800">
        
        {/* Top Logo/Brand */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-yellow-300 font-mono tracking-wider">
            CV-MATIC
          </h1>
          <p className="text-yellow-200 text-xs font-mono">CAREER DISPENSER</p>
        </div>

        {/* Screen */}
        <div className="bg-black rounded border-4 border-gray-400 h-32 mb-6 overflow-hidden">
          <VendingScreen 
            selectedSection={selectedSection}
            isDispensing={isDispensing}
            showProduct={showProduct}
            onReset={resetMachine}
          />
        </div>

        {/* Product Window */}
        <div className="bg-gray-800 border-4 border-gray-600 rounded h-24 mb-6 relative overflow-hidden">
          <div className="absolute inset-2 bg-gray-900 rounded flex items-center justify-center">
            {isDispensing && (
              <div className="text-yellow-400 text-xs font-mono animate-pulse">
                DISPENSING...
              </div>
            )}
          </div>
        </div>

        {/* Control Panel */}
        <VendingButtons 
          sections={cvSections}
          onProductSelect={handleProductSelect}
          disabled={isDispensing}
        />

        {/* Coin Slot */}
        <div className="absolute bottom-4 right-4">
          <div className="w-8 h-4 bg-black rounded-full border-2 border-gray-400"></div>
          <p className="text-xs text-yellow-200 text-center mt-1 font-mono">COINS</p>
        </div>
      </div>

      {/* Product Dispenser (appears when product is dispensed) */}
      {showProduct && selectedSection && (
        <ProductDispenser 
          section={selectedSection}
          onClose={resetMachine}
        />
      )}
    </div>
  );
};

export default VendingMachine;
