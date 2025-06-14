
import React, { useState } from 'react';
import VendingScreen from './VendingScreen';
import ProductGrid from './ProductGrid';
import CollectionShelf from './CollectionShelf';

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
  const [machineState, setMachineState] = useState<'idle' | 'dispensing' | 'collecting'>('idle');
  const [cameraFocused, setCameraFocused] = useState(false);
  const [dispensedProduct, setDispensedProduct] = useState<CVSection | null>(null);

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
    setMachineState('dispensing');
    setCameraFocused(true);
    
    // Simulate dispensing process
    setTimeout(() => {
      setDispensedProduct(section);
      setMachineState('collecting');
    }, 3000);
  };

  const handleProductCollected = () => {
    // Reset everything
    setSelectedSection(null);
    setDispensedProduct(null);
    setMachineState('idle');
    setCameraFocused(false);
  };

  return (
    <div className={`fixed inset-0 transition-all duration-1000 ${
      cameraFocused ? 'scale-150 translate-y-16' : 'scale-100'
    } flex items-center justify-center`}>
      
      {/* Main Vending Machine Body */}
      <div className="relative perspective-1000">
        <div className={`
          relative bg-gradient-to-b from-orange-500 via-red-600 to-red-800 
          rounded-3xl shadow-2xl border-8 border-orange-900
          transition-all duration-1000 transform-gpu
          ${cameraFocused ? 'rotateY-2' : 'rotateY-0'}
        `}
        style={{
          width: '480px',
          height: '800px',
          boxShadow: `
            0 0 0 6px #c2410c,
            0 30px 80px rgba(0,0,0,0.5),
            inset 0 4px 8px rgba(255,255,255,0.1),
            inset 0 -4px 8px rgba(0,0,0,0.3)
          `
        }}>
          
          {/* Top Brand Section */}
          <div className="relative p-6 text-center">
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-xl p-5 border-6 border-yellow-600 shadow-inner">
              <h1 className="text-4xl font-bold text-red-800 font-mono tracking-wider drop-shadow-xl">
                CV-MATIC
              </h1>
              <p className="text-red-700 text-sm font-mono font-bold">CAREER DISPENSER</p>
              <div className="flex justify-center mt-2">
                <div className="w-20 h-2 bg-red-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Digital Screen */}
          <div className="mx-6 mb-4">
            <div className="bg-black rounded-xl border-8 border-gray-700 h-48 overflow-hidden shadow-inner relative">
              <div className="absolute inset-0 bg-gradient-to-b from-green-400/20 via-green-400/10 to-transparent"></div>
              <div className="absolute inset-2 bg-gradient-to-b from-gray-900 to-black rounded-lg"></div>
              <VendingScreen 
                sections={cvSections}
                selectedSection={selectedSection}
                machineState={machineState}
                onProductSelect={handleProductSelect}
              />
            </div>
          </div>

          {/* Product Display Grid */}
          <div className="mx-6 mb-4">
            <ProductGrid 
              sections={cvSections}
              selectedSection={selectedSection}
              machineState={machineState}
            />
          </div>

          {/* Collection Shelf */}
          <div className="mx-6 mb-6">
            <CollectionShelf 
              dispensedProduct={dispensedProduct}
              machineState={machineState}
              onProductCollected={handleProductCollected}
            />
          </div>

          {/* Coin Slot and Change Return - Repositioned */}
          <div className="absolute bottom-8 left-6 flex items-center gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-8 bg-black rounded-full border-4 border-gray-400 shadow-inner relative overflow-hidden">
                <div className="absolute inset-1 bg-gradient-to-b from-gray-600 to-black rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-6 bg-black rounded-full"></div>
                </div>
              </div>
              <p className="text-xs text-yellow-200 font-mono font-bold mt-1">INSERT COINS</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-4 bg-black rounded border-3 border-gray-400 shadow-inner">
                <div className="w-full h-full bg-gradient-to-b from-gray-600 to-black rounded-sm"></div>
              </div>
              <p className="text-xs text-yellow-200 font-mono font-bold mt-1">CHANGE</p>
            </div>
          </div>

          {/* Side Ventilation Grilles */}
          <div className="absolute left-3 top-1/3 w-6 h-40 bg-gradient-to-b from-red-700 to-red-900 rounded-lg">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-full h-2 border-t-2 border-red-800 mt-2 first:mt-3"></div>
            ))}
          </div>
          <div className="absolute right-3 top-1/3 w-6 h-40 bg-gradient-to-b from-red-700 to-red-900 rounded-lg">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-full h-2 border-t-2 border-red-800 mt-2 first:mt-3"></div>
            ))}
          </div>
        </div>

        {/* Enhanced floor shadow */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[500px] h-12 bg-black/40 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default VendingMachine;
