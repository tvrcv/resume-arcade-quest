
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
  const [cameraFocused, setCameraFocused] = useState(false);

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
          description: "Led development of web applications using React and Node.js"
        },
        {
          company: "StartupXYZ",
          position: "Frontend Developer", 
          duration: "2020 - 2022",
          description: "Built responsive user interfaces with modern frameworks"
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
          description: "Bachelor's degree with honors in Computer Science"
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
          description: "Full-stack web application with payment integration"
        },
        {
          name: "Mobile Weather App",
          tech: "React Native, API Integration",
          description: "Cross-platform mobile application with real-time data"
        }
      ]
    }
  ];

  const handleProductSelect = async (section: CVSection) => {
    setSelectedSection(section);
    setIsDispensing(true);
    setCameraFocused(true);
    
    // Simulate vending machine delay with camera pan
    setTimeout(() => {
      setIsDispensing(false);
      setShowProduct(true);
    }, 3000);
  };

  const resetMachine = () => {
    setSelectedSection(null);
    setShowProduct(false);
    setIsDispensing(false);
    setCameraFocused(false);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center transition-all duration-1000 ${
      cameraFocused ? 'scale-125 translate-y-8' : 'scale-100'
    }`}>
      {/* Main Vending Machine with 3D perspective */}
      <div className="relative perspective-1000">
        <div className={`
          relative bg-gradient-to-b from-orange-500 via-red-600 to-red-800 
          rounded-2xl shadow-2xl border-8 border-orange-900
          transition-all duration-1000 transform-gpu
          ${cameraFocused ? 'rotateY-2 scale-110' : 'rotateY-0'}
        `}
        style={{
          width: '420px',
          height: '720px',
          boxShadow: `
            0 0 0 4px #c2410c,
            0 20px 60px rgba(0,0,0,0.4),
            inset 0 2px 4px rgba(255,255,255,0.1),
            inset 0 -2px 4px rgba(0,0,0,0.2)
          `
        }}>
          
          {/* Top Brand Section */}
          <div className="relative p-6 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg p-4 border-4 border-yellow-600 shadow-inner">
              <h1 className="text-3xl font-bold text-red-800 font-mono tracking-wider drop-shadow-lg">
                CV-MATIC
              </h1>
              <p className="text-red-700 text-sm font-mono font-bold">CAREER DISPENSER</p>
            </div>
          </div>

          {/* Digital Screen with glass effect */}
          <div className="mx-6 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>
            <div className="bg-black rounded-lg border-6 border-gray-700 h-40 overflow-hidden shadow-inner relative">
              <div className="absolute inset-0 bg-gradient-to-b from-green-400/10 to-transparent"></div>
              <VendingScreen 
                selectedSection={selectedSection}
                isDispensing={isDispensing}
                showProduct={showProduct}
                onReset={resetMachine}
              />
            </div>
          </div>

          {/* Product Display Window */}
          <div className="mx-6 mb-6 relative">
            <div className="bg-gradient-to-b from-gray-700 to-gray-900 border-6 border-gray-600 rounded-lg h-32 shadow-inner overflow-hidden">
              <div className="absolute inset-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded flex items-center justify-center">
                {isDispensing && selectedSection && (
                  <div className="relative">
                    <div className={`w-16 h-20 ${selectedSection.productColor} rounded-lg shadow-lg animate-vending-drop`}>
                      <div className="w-full h-4 bg-white/20 rounded-t-lg"></div>
                      <div className="text-white text-xs text-center mt-2 font-bold">
                        {selectedSection.buttonCode}
                      </div>
                    </div>
                  </div>
                )}
                {!isDispensing && !showProduct && (
                  <div className="text-gray-400 text-xs font-mono">
                    PRODUCT WINDOW
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="mx-6 mb-6">
            <VendingButtons 
              sections={cvSections}
              onProductSelect={handleProductSelect}
              disabled={isDispensing}
            />
          </div>

          {/* Coin Slot and Change Return */}
          <div className="absolute bottom-6 right-6 flex flex-col items-center gap-2">
            <div className="w-12 h-6 bg-black rounded-full border-4 border-gray-400 shadow-inner relative">
              <div className="absolute inset-1 bg-gradient-to-b from-gray-600 to-black rounded-full"></div>
            </div>
            <p className="text-xs text-yellow-200 font-mono font-bold">COINS</p>
            
            <div className="w-8 h-3 bg-black rounded border-2 border-gray-400 mt-2">
              <div className="w-full h-full bg-gradient-to-b from-gray-600 to-black rounded-sm"></div>
            </div>
            <p className="text-xs text-yellow-200 font-mono font-bold">CHANGE</p>
          </div>

          {/* Side Ventilation Grilles */}
          <div className="absolute left-2 top-1/3 w-4 h-32 bg-gradient-to-b from-red-700 to-red-900 rounded">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-full h-2 border-t border-red-800 mt-2"></div>
            ))}
          </div>
          <div className="absolute right-2 top-1/3 w-4 h-32 bg-gradient-to-b from-red-700 to-red-900 rounded">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-full h-2 border-t border-red-800 mt-2"></div>
            ))}
          </div>
        </div>

        {/* Floor shadow */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-96 h-8 bg-black/30 rounded-full blur-sm"></div>
      </div>

      {/* Product Dispenser */}
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
