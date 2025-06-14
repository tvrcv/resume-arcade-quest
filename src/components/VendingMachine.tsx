
import React, { useState } from 'react';
import VendingScreen from './VendingScreen';
import ProductGrid from './ProductGrid';
import CollectionShelf from './CollectionShelf';
import VendingButtons from './VendingButtons';

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
  const [cameraFocused, setCameraFocused] = useState(false);
  const [dispensedProduct, setDispensedProduct] = useState<CVSection | null>(null);

  const cvSections: CVSection[] = [
    {
      id: 'experience',
      title: 'Work Experience',
      buttonCode: 'A1',
      productType: 'soda',
      productColor: 'bg-red-600',
      productImage: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400',
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
      productImage: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400',
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
      productImage: 'https://images.unsplash.com/photo-1571506165871-ee72a35bce14?w=400',
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
      productImage: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
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
      productImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
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
    console.log('Product selected:', section.buttonCode);
    setSelectedSection(section);
    setMachineState('dispensing');
    setCameraFocused(true);
    
    // Simulate dispensing process
    setTimeout(() => {
      setDispensedProduct(section);
      setMachineState('collecting');
      console.log('Product dispensed:', section.buttonCode);
    }, 3000);
  };

  const handleProductCollected = () => {
    console.log('Product collected');
    // Reset everything
    setSelectedSection(null);
    setDispensedProduct(null);
    setMachineState('idle');
    setCameraFocused(false);
  };

  return (
    <div className={`fixed inset-0 transition-all duration-1000 ${
      cameraFocused ? 'scale-110 translate-y-8' : 'scale-100'
    } flex items-center justify-center bg-gradient-to-b from-stone-800 via-stone-700 to-stone-900`}>
      
      {/* Main Vending Machine Body */}
      <div className="relative perspective-1000">
        <div className={`
          relative bg-gradient-to-b from-orange-500 via-red-600 to-red-800 
          rounded-3xl shadow-2xl border-8 border-orange-900
          transition-all duration-1000 transform-gpu
          ${cameraFocused ? 'rotateY-2' : 'rotateY-0'}
        `}
        style={{
          width: '520px',
          height: '850px',
          boxShadow: `
            0 0 0 8px #c2410c,
            0 35px 90px rgba(0,0,0,0.6),
            inset 0 6px 12px rgba(255,255,255,0.15),
            inset 0 -6px 12px rgba(0,0,0,0.4)
          `
        }}>
          
          {/* Top Brand Section */}
          <div className="relative p-8 text-center">
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-2xl p-6 border-6 border-yellow-600 shadow-inner">
              <h1 className="text-5xl font-bold text-red-800 font-mono tracking-wider drop-shadow-2xl">
                CV-MATIC
              </h1>
              <p className="text-red-700 text-lg font-mono font-bold">CAREER DISPENSER</p>
              <div className="flex justify-center mt-3">
                <div className="w-24 h-3 bg-red-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Digital Screen */}
          <div className="mx-8 mb-6">
            <div className="bg-black rounded-2xl border-8 border-gray-700 h-64 overflow-hidden shadow-inner relative">
              <div className="absolute inset-0 bg-gradient-to-b from-green-400/30 via-green-400/15 to-transparent"></div>
              <div className="absolute inset-3 bg-gradient-to-b from-gray-900 to-black rounded-xl">
                <VendingScreen 
                  sections={cvSections}
                  selectedSection={selectedSection}
                  machineState={machineState}
                  onProductSelect={handleProductSelect}
                />
              </div>
            </div>
          </div>

          {/* Transparent Glass Product Display */}
          <div className="mx-8 mb-6">
            <div className="relative bg-gradient-to-b from-gray-200 to-gray-400 border-8 border-gray-600 rounded-2xl h-56 shadow-inner overflow-hidden">
              {/* Glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-transparent rounded-xl"></div>
              
              {/* Glass reflection */}
              <div className="absolute top-4 left-4 w-16 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-lg transform rotate-12"></div>
              
              <ProductGrid 
                sections={cvSections}
                selectedSection={selectedSection}
                machineState={machineState}
              />
            </div>
          </div>

          {/* Physical Button Panel */}
          <div className="mx-8 mb-6">
            <div className="bg-gradient-to-b from-gray-700 to-gray-900 border-6 border-gray-600 rounded-2xl p-4 shadow-inner">
              <VendingButtons 
                sections={cvSections}
                onProductSelect={handleProductSelect}
                disabled={machineState !== 'idle'}
              />
            </div>
          </div>

          {/* Collection Shelf */}
          <div className="mx-8 mb-8">
            <CollectionShelf 
              dispensedProduct={dispensedProduct}
              machineState={machineState}
              onProductCollected={handleProductCollected}
            />
          </div>

          {/* Coin Slot and Change Return - Bottom left */}
          <div className="absolute bottom-6 left-8 flex items-center gap-6">
            <div className="flex flex-col items-center">
              <div className="w-14 h-8 bg-black rounded-full border-4 border-gray-400 shadow-inner relative overflow-hidden">
                <div className="absolute inset-1 bg-gradient-to-b from-gray-600 to-black rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-5 bg-black rounded-full"></div>
                </div>
              </div>
              <p className="text-sm text-yellow-200 font-mono font-bold mt-2">COINS</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-10 h-4 bg-black rounded border-3 border-gray-400 shadow-inner">
                <div className="w-full h-full bg-gradient-to-b from-gray-600 to-black rounded-sm"></div>
              </div>
              <p className="text-sm text-yellow-200 font-mono font-bold mt-2">CHANGE</p>
            </div>
          </div>

          {/* Side Ventilation Grilles */}
          <div className="absolute left-4 top-1/3 w-8 h-48 bg-gradient-to-b from-red-700 to-red-900 rounded-xl">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-full h-2 border-t-2 border-red-800 mt-2 first:mt-4"></div>
            ))}
          </div>
          <div className="absolute right-4 top-1/3 w-8 h-48 bg-gradient-to-b from-red-700 to-red-900 rounded-xl">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-full h-2 border-t-2 border-red-800 mt-2 first:mt-4"></div>
            ))}
          </div>
        </div>

        {/* Enhanced floor shadow */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[540px] h-16 bg-black/50 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default VendingMachine;
